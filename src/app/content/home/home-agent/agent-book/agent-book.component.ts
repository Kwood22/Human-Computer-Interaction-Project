import { Component, OnInit,ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-agent-book',
  templateUrl: './agent-book.component.html',
  styleUrls: ['./agent-book.component.css']
})
export class AgentBookComponent implements OnInit {

    @ViewChild('datePicker') datePicker;
    @ViewChild('adult') adult;
    @ViewChild('youth') youth;
    @ViewChild('children') children;
    @ViewChild('infant') infant;

    // Hard-coded cities
    destinations = ['Bloemfontein', 'Cape Town International', 'Gerorge', 'Hoedspruit', 'Margate', 'OR Thambo International', 'Plettenberg Bay', 'Sishen Kathu'];
    destAbbreviation = ['BFN', 'CPT', 'GRJ', 'HDS', 'MGH', 'JNB', 'PBZ', 'SIS'];

    numberOfFlights: any;

    bookingInfo = {
        from: "",
        to: "",
        date: "",
        passengers: {
            adult: 1,
            youth: 0,
            children: 0,
            infant: 0
        },
        oneWay: 0
    };

    constructor() {         
    }

    ngOnInit() {
        this.numberOfFlights = [];
        this.numberOfFlights.push('1');
        console.log(this.numberOfFlights.length);
        
        $(".popover").popover('hide');
        this.hideDatepickerInput();
        this.passengerInput();
        this.togglePopover();                
    }

    submit() {
        this.bookingInfo.passengers.adult = this.adult.nativeElement.value;
        this.bookingInfo.passengers.youth = this.youth.nativeElement.value;
        this.bookingInfo.passengers.children = this.children.nativeElement.value;
        this.bookingInfo.passengers.infant = this.infant.nativeElement.value;
        this.bookingInfo.date = this.datePicker.nativeElement.value.substring(0, 10);        
        
        console.log(this.bookingInfo);
    }

    addFlight() {
        this.numberOfFlights.push('1');
    }

    assignFrom(item, i) {
        this.bookingInfo.from = item;
    }

    assignTo(item, i) {
        this.bookingInfo.to = item;
    }

    togglePopover() {
        $(function () {            
            $("[data-toggle=popover]").each(function(i, obj) {
                $(this).popover({
                    html: true,
                    content: function() {
                        var id = $(this).attr('id')
                        return $('#popover-content-' + id).html();
                    }
                });                
            });
        });
    }

    hideDatepickerInput() {
        this.datePicker.nativeElement.style.width = "0";
        this.datePicker.nativeElement.style.padding = "0";
        this.datePicker.nativeElement.style.border = "none";
    }

    passengerInput() {
        $(function () {            
            $('.btn-number').click(function(e){                         
                e.preventDefault();
                
                var fieldName = $(this).attr('data-field');
                var type = $(this).attr('data-type');
                var input = $("input[name='"+fieldName+"']");
                var currentVal = parseInt(input.val());

                if (!isNaN(currentVal)) {
                    if(type == 'minus') {                    
                        if(currentVal > input.attr('min')) {
                            input.val(currentVal - 1).change();
                        } 
                        if(parseInt(input.val()) == input.attr('min')) {
                            $(this).attr('disabled', true);
                        }        
                    } else if(type == 'plus') {        
                        if(currentVal < input.attr('max')) {
                            input.val(currentVal + 1).change();
                        }
                        if(parseInt(input.val()) == input.attr('max')) {
                            $(this).attr('disabled', true);
                        }        
                    }
                } else {
                    input.val(0);
                }
            });

            $('.input-number').focusin(function(){
                $(this).data('oldValue', $(this).val());
            });

            $('.input-number').change(function() {  
                var minValue = parseInt($(this).attr('min'));
                var maxValue = parseInt($(this).attr('max'));
                var valueCurrent = parseInt($(this).val());
                
                var name = $(this).attr('name');
                if(valueCurrent >= minValue) {
                    $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
                } else {
                    alert('Sorry, the minimum value was reached');
                    $(this).val($(this).data('oldValue'));
                }
                if(valueCurrent <= maxValue) {
                    $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
                } else {
                    alert('Sorry, the maximum value was reached');
                    $(this).val($(this).data('oldValue'));
                }                        
            });

            $(".input-number").keydown(function (e) {
                // Allow: backspace, delete, tab, escape, enter and .
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                        // Allow: Ctrl+A
                    (e.keyCode == 65 && e.ctrlKey === true) || 
                        // Allow: home, end, left, right
                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                            // let it happen, don't do anything
                            return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });
        });
    }

}

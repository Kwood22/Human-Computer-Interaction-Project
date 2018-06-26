import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './agent-book.component.html',
  styleUrls: ['./agent-book.component.css']
})
export class AgentBookComponent implements OnInit {

    @ViewChild('datePicker') datePicker;
    // @ViewChild('datePicker2') datePicker2;
    @ViewChild('roundTrip') roundTrip;
    @ViewChild('adult') adult;
    @ViewChild('youth') youth;
    @ViewChild('children') children;
    @ViewChild('infant') infant;

    // Hard-coded cities
    destinations = ['Bloemfontein', 'Cape Town Intl.', 'Gerorge', 'Hoedspruit', 'Margate', 'OR Thambo Intl.', 'Plettenberg Bay', 'Sishen Kathu'];
    destAbbreviation = ['BFN', 'CPT', 'GRJ', 'HDS', 'MGH', 'JNB', 'PBZ', 'SIS'];    

    booking = {
        id: 0,
        from: "",
        to: "",
        dateDepart: "",
        dateReturn: "",
        passengers: {
            adult: 1,
            youth: 0,
            children: 0,
            infant: 0
        },
        oneWay: 1
    };

    constructor(private api: ApiService, private router: Router) {         
    }

    ngOnInit() {                  
        $(".popover").popover('hide');        
        this.passengerInput();
        this.togglePopover();                      
        // this.hideDatepickerInput();
    }

    submit() {        
        this.booking.passengers.adult = parseInt((<HTMLInputElement>document.getElementById('adult')).value);
        this.booking.passengers.youth = parseInt((<HTMLInputElement>document.getElementById('youth')).value);
        this.booking.passengers.children = parseInt((<HTMLInputElement>document.getElementById('children')).value);
        this.booking.passengers.infant = parseInt((<HTMLInputElement>document.getElementById('infant')).value);
        this.booking.dateDepart = this.datePicker.nativeElement.value.substring(0, 10);      
        // this.booking.dateReturn = this.datePicker2.nativeElement.value.substring(0, 10);              

        // console.log(this.booking);        
        this.router.navigate(['/book/flights']);
        $(".popover").popover('hide'); 
    }

    clickSearch() {
        // this.api.saveBooking(this.booking).subscribe(
        //     res => console.log(res)
        // );
        this.router.navigate(['/agent/search']);
    }

    assignFrom(item) {
        this.booking.from = item;
    }

    assignTo(item) {
        this.booking.to = item;
    }

    toggleDatePicker(i: number) {        
        $('#datetimepicker').datetimepicker({
            format: 'L'
        });
    }

    hideDatepickerInput() {
        // if (this.datePicker2 != null) {
        //     this.datePicker2.nativeElement.style.width = "0";
        //     this.datePicker2.nativeElement.style.padding = "0";
        //     this.datePicker2.nativeElement.style.border = "none";            
        // }       

        // this.datePicker.nativeElement.style.width = "0";
        // this.datePicker.nativeElement.style.padding = "0";
        // this.datePicker.nativeElement.style.border = "none";                  
    }

    roundTripClick() {
        this.roundTrip.nativeElement.click();                      
    }

    togglePopover() {        
        $(function () {            
            $("[data-toggle=popover]").each(function(i, obj) {
                $(this).popover({
                    html: true,
                    content: function() {
                        var id = $(this).attr('id');
                        return $('#popover-content-' + id).html();
                    }                    
                });                
            });
        });
    }

    passengerInput() {
        this.togglePopover();

        $(function () {            
            $('.btn-number').click(function(e){                                         
                e.preventDefault();                                
                
                var fieldName = $(this).attr('id');                
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
                    $(".btn-number[data-type='minus'][id='"+name+"']").removeAttr('disabled');
                } else {
                    alert('Sorry, the minimum value was reached');
                    $(this).val($(this).data('oldValue'));
                }
                if(valueCurrent <= maxValue) {
                    $(".btn-number[data-type='plus'][id='"+name+"']").removeAttr('disabled');
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

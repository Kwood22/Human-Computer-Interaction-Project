import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'app-home-book',
    templateUrl: './home-book.component.html',
    styleUrls: ['./home-book.component.css']
})
export class HomeBookComponent implements OnInit {

    @ViewChild('datePicker') datePicker;
    @ViewChild('datePicker2') datePicker2;
    @ViewChild('roundTrip') roundTrip;
    @ViewChild('adult') adult;
    @ViewChild('youth') youth;
    @ViewChild('children') children;
    @ViewChild('infant') infant;

    // Hard-coded cities
    destinations = ['Bloemfontein', 'Cape Town Intl.', 'Gerorge', 'Hoedspruit', 'Margate', 'OR Thambo Intl.', 'Plettenberg Bay', 'Sishen Kathu'];
    destAbbreviation = ['BFN', 'CPT', 'GRJ', 'HDS', 'MGH', 'ORT', 'PBZ', 'SIS'];

    bookingInfo = {
        id: 1,
        from: "",
        to: "",
        dateDepart: "",
        dateReturn: "",
        passengersType: {
            adult: 1,
            youth: 0,
            children: 0,
            infant: 0
        },
        passengers: [],
        departFlight: 0,
        returnFlight: 0,
        oneWay: 1,
        additionalItems: [],
        totalCost: 0.0
    };

    error: boolean;
   
    constructor(private router: Router) { }

    ngOnInit() {
        this.error = false;
        $(".popover").popover('hide');
        // this.hideDatepickerInput();
        this.passengerInput();
        this.togglePopover();                
    }

    submit() {
        if (this.bookingInfo.from == '' || this.bookingInfo.to == '') {            
            this.error = true;
        } else {        
            this.error = false;
            this.bookingInfo.passengersType.adult = this.adult.nativeElement.value;
            this.bookingInfo.passengersType.youth = this.youth.nativeElement.value;
            this.bookingInfo.passengersType.children = this.children.nativeElement.value;
            this.bookingInfo.passengersType.infant = this.infant.nativeElement.value;
            //this.bookingInfo.dateDepart = this.datePicker.nativeElement.value.substring(0, 10);     

            if (this.datePicker2 != null) { 
                //this.bookingInfo.dateReturn = this.datePicker2.nativeElement.value.substring(0, 10);        
            }   
        
            this.bookingInfo.dateDepart="18 May 2018";
            this.bookingInfo.dateReturn ="19 May 2018";
            console.log(this.bookingInfo);
            localStorage.setItem('2454AC', JSON.stringify(this.bookingInfo));
            this.router.navigate(['/book']);
            $(".popover").popover('hide');
        }
    }

    debug() {
        console.log("Here");
    }

    assignFrom(item, i) {
        this.bookingInfo.from = item;
    }

    assignTo(item, i) {
        this.bookingInfo.to = item;
    }

    saveDepartDate() {                        
        this.bookingInfo.dateDepart = this.datePicker.nativeElement.value;        
    }

    saveReturnDate() {
        this.bookingInfo.dateReturn = this.datePicker2.nativeElement.value;  
    }

    togglePopover() {
        $(function () {            
            $("[data-toggle=popover]").each(function(i, obj) {
                $(this).popover({
                    html: true,
                    content: function() {
                        var id = $(this).attr('id')
                        return $('#popover-content-'+id).html();
                    }                    
                });                
            });
        });
    }

    hideDatepickerInput() {
        if (this.datePicker2 != null) {
            this.datePicker2.nativeElement.style.width = "0";
            this.datePicker2.nativeElement.style.padding = "0";
            this.datePicker2.nativeElement.style.border = "none";            
        }       

        this.datePicker.nativeElement.style.width = "0";
        this.datePicker.nativeElement.style.padding = "0";
        this.datePicker.nativeElement.style.border = "none";                  
    }

    roundTripClick() {
        this.roundTrip.nativeElement.click();                      
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

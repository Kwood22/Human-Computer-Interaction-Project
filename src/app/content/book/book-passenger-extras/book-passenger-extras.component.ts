import { Component, OnInit, ViewChild  } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-book-passenger-extras",
  templateUrl: "./book-passenger-extras.component.html",
  styleUrls: ["./book-passenger-extras.component.css"]
})
export class BookPassengerExtrasComponent implements OnInit {
  @ViewChild('wheel') wheel;
  @ViewChild('pet') pet;
  @ViewChild('assist') assist;
  @ViewChild('baggage') baggage;
  @ViewChild('lounge') lounge;
  @ViewChild('golf') golf;
  @ViewChild('fish') fish;
  @ViewChild('surf') surf;
  @ViewChild('bike') bike;
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
    totalCost: 0
};
public numPassengers: any;
public items: any;
public totalCost=0;

  constructor() {}

  ngOnInit() {
      this.bookingInfo = JSON.parse(localStorage.getItem('2454AC'));
    this.bookingInfo.additionalItems.push({name:"Wheelchair Assistance", num: 0, cost: 0});
    this.bookingInfo.additionalItems.push({name:"Flying Pets", num: 0, cost: 0});
    this.bookingInfo.additionalItems.push({name:"Assisted Passengers", num:  0, cost: 0});
    this.bookingInfo.additionalItems.push({name:"Additional Baggage", num:  0, cost: 0});
    this.bookingInfo.additionalItems.push({name:"Golf Bag", num:  0, cost: 0});
    this.bookingInfo.additionalItems.push({name:"Lounge Access", num:  0, cost: 0});
    this.bookingInfo.additionalItems.push({name:"Fishing Rods", num:  0, cost: 0});
    this.bookingInfo.additionalItems.push({name:"Bicycle", num:  0, cost: 0});
    this.bookingInfo.additionalItems.push({name:"Surf Boards", num:  0, cost: 0});
    this.items = this.bookingInfo.additionalItems;
    this.passengerInput();
    this.totalCost = this.bookingInfo.totalCost;
    this.numPassengers = Number(this.bookingInfo.passengersType.adult) + Number(this.bookingInfo.passengersType.youth)
    + Number(this.bookingInfo.passengersType.children)  + Number(this.bookingInfo.passengersType.infant);
  }

  public saveAddOns(index, value){    
    if (index === 0){
        this.bookingInfo.additionalItems[0].num += value;
        this.bookingInfo.additionalItems[0].cost = this.bookingInfo.additionalItems[0].num*80;
        
    }else if (index == 1){
        this.bookingInfo.additionalItems[1].num += value;
    }else if (index == 2){
        this.bookingInfo.additionalItems[2].num += value;
    }else if (index == 3){
        this.bookingInfo.additionalItems[3].num += value;
        this.bookingInfo.additionalItems[3].cost = this.bookingInfo.additionalItems[3].num * 25;
    }else if (index == 4){
        this.bookingInfo.additionalItems[4].num += value;
        this.bookingInfo.additionalItems[4].cost = this.bookingInfo.additionalItems[4].num * 252;
    }else if (index == 5){
        this.bookingInfo.additionalItems[5].num += value;
        this.bookingInfo.additionalItems[5].cost = this.bookingInfo.additionalItems[5].num * 201;
    }else if (index == 6){
        this.bookingInfo.additionalItems[6].num += value;
        this.bookingInfo.additionalItems[6].cost= this.bookingInfo.additionalItems[6].num*252;
    }else if (index == 7){
        this.bookingInfo.additionalItems[7].num += value;
        this.bookingInfo.additionalItems[7].cost = this.bookingInfo.additionalItems[7].num*252;
    }else if (index == 8){
        this.bookingInfo.additionalItems[8].num += value;
        this.bookingInfo.additionalItems[8].cost= this.bookingInfo.additionalItems[8].num*252;
    }
    this.totalCost = this.bookingInfo.totalCost;
    for(let i =0; i<9 ; i++){
        this.totalCost += this.bookingInfo.additionalItems[i].cost;
      }
    this.items = this.bookingInfo.additionalItems;
    console.log(this.items[0]);
  }

  saveExtras(){
      for(let i =0; i<9 ; i++){
        this.bookingInfo.totalCost += this.bookingInfo.additionalItems[i].cost;
      }
      localStorage.setItem("2454AC", JSON.stringify(this.bookingInfo));
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

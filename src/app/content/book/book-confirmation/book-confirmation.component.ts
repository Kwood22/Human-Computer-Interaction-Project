import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-confirmation',
  templateUrl: './book-confirmation.component.html',
  styleUrls: ['./book-confirmation.component.css']
})
export class BookConfirmationComponent implements OnInit {

  

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
public amountExc: number;
public passengers: any;
public vat: number;
  constructor() { }

  ngOnInit() {
    this.bookingInfo = JSON.parse(localStorage.getItem('2454AC'));
    this.items = this.bookingInfo.additionalItems;   
    this.amountExc =  Math.round((this.bookingInfo.totalCost * (100/115)) * 100) / 100;
    this.vat =Math.round(( this.bookingInfo.totalCost - Math.round((this.bookingInfo.totalCost * (100/115)) * 100) / 100 )*100)/100;
    this.numPassengers = Number(this.bookingInfo.passengersType.adult) + Number(this.bookingInfo.passengersType.youth)
    + Number(this.bookingInfo.passengersType.children)  + Number(this.bookingInfo.passengersType.infant);
    this.passengers = this.bookingInfo.passengers;
    console.log(this.numPassengers);
    
  }

}

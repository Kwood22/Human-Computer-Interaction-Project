import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-payment',
  templateUrl: './book-payment.component.html',
  styleUrls: ['./book-payment.component.css']
})
export class BookPaymentComponent implements OnInit {
  bookingInfo: any;
public numPassengers: any;
public items: any;
  constructor() { }

  ngOnInit() {
    this.bookingInfo = JSON.parse(localStorage.getItem('2454AC'));
    console.log(this.bookingInfo);
    this.items = this.bookingInfo.additionalItems;
    this.numPassengers = Number(this.bookingInfo.passengersType.adult) + Number(this.bookingInfo.passengersType.youth)
    + Number(this.bookingInfo.passengersType.children)  + Number(this.bookingInfo.passengersType.infant);
  }

}

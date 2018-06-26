import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-book-passenger-details',
  templateUrl: './book-passenger-details.component.html',
  styleUrls: ['./book-passenger-details.component.css']
})
export class BookPassengerDetailsComponent implements OnInit {
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
      departFlight: {price: 0},
      returnFlight: {price: 0},
      oneWay: 1,
      additionalItems: [],
      totalCost: 0
  };
  public numPassengers: any;
  public passengers: any;
  

  constructor(private router: Router) {
    
   }

  ngOnInit() {
    $('#alert1').hide();
    this.getBooking();
    
  }

  getBooking(){
    this.bookingInfo = JSON.parse(localStorage.getItem('2454AC'));
    this.numPassengers= Number(this.bookingInfo.passengersType.adult) + Number(this.bookingInfo.passengersType.youth)
    + Number(this.bookingInfo.passengersType.children)  + Number(this.bookingInfo.passengersType.infant);
    for(let i =0; i<this.numPassengers;i++){
      this.bookingInfo.passengers.push({firstName: "John",
      lastName: "Doe",
      id: "65254897965",
      email: "joe@doe.com",
      mobile: "0798889989"});
    }
    this.passengers = this.bookingInfo.passengers;
    this.bookingInfo.departFlight.price = this.bookingInfo.departFlight.price * this.numPassengers;
    if( this.bookingInfo.oneWay ==0){
    this.bookingInfo.returnFlight.price = this.bookingInfo.returnFlight.price * this.numPassengers;
    }
    console.log ( this.bookingInfo);
  
}

  savePassengerDetails(){
    if($('#terms:checkbox:checked').length == 0){
      $('#alert1').show();
    }else{
    console.log ( this.bookingInfo);
    localStorage.setItem('2454AC', JSON.stringify(this.bookingInfo));
    this.router.navigate(['/book/passenger/extras']);
    }
  }

}

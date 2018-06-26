import { Component, OnInit } from '@angular/core';
import { FLIGHTS } from './flight-data';
declare var $: any;
@Component({
  selector: 'app-book-flights',
  templateUrl: './book-flights.component.html',
  styleUrls: ['./book-flights.component.css']
})
export class BookFlightsComponent implements OnInit {
  flights = FLIGHTS;
  flightsDepart = [];
  flightsReturn = [];
  dateDepart = '';
  dateReturn = '';
  checkedIndex=0;
  checkedDepartIndex=0;



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


  constructor() { }

  ngOnInit() {
    this.bookingInfo = JSON.parse(localStorage.getItem ('2454AC'));
    let flights = FLIGHTS;
    let from = this.destAbbreviation[this.destinations.indexOf(this.bookingInfo.from)];
    let to = this.destAbbreviation[this.destinations.indexOf(this.bookingInfo.to)];
    this.flights.forEach(element => {
      if (element.from === from && element.to === to) {
        this.flightsDepart.push(element);
        this.dateDepart = this.bookingInfo.dateDepart;
      } else if (element.from === to && element.to === from) {
        this.flightsReturn.push(element);
        this.dateReturn = this.bookingInfo.dateReturn;
      }
    });
    
  }
  public handle (i) {
    $('#flightContainer' + this.checkedIndex).removeClass('card-active');
      this.checkedIndex = i;
      $('#flightContainer' + i).toggleClass('card-active');
      $('#radioReturn' + i).prop('checked', true);
  }

  public handleDepart (i) {
    $('#flightContainerDepart' + this.checkedDepartIndex).removeClass('card-active');
      this.checkedDepartIndex = i;
      $('#flightContainerDepart' + i).toggleClass('card-active');
      $('#radioDepart' + i).prop('checked', true);
  }

  private saveFlights(): void {
    let departID = ($('input[name=radioDepart]:checked').attr('id')).substring(11);
    let numPassengers = Number(this.bookingInfo.passengersType.adult) + Number(this.bookingInfo.passengersType.youth)
    + Number(this.bookingInfo.passengersType.children)  + Number(this.bookingInfo.passengersType.infant);
      if(this.bookingInfo.oneWay === 0 ){//return
        let returnID = ($('input[name=radioReturn]:checked').attr('id')).substring(11);
        this.bookingInfo.departFlight = this.flightsDepart[departID] ;
        this.bookingInfo.returnFlight = this.flightsReturn[returnID] ;
        let price = Number(this.flightsDepart[departID].price) + Number(this.flightsReturn[returnID].price);
        this.bookingInfo.totalCost = price * numPassengers;        
      }else{//oneway
        let departID = ($('input[name=radioDepart]:checked').attr('id')).substring(11);
        this.bookingInfo.departFlight = this.flightsDepart[departID] ;
        let price =  Number(this.flightsDepart[departID].price);        
        this.bookingInfo.totalCost = price*numPassengers; 
      }
      localStorage.setItem('2454AC', JSON.stringify(this.bookingInfo));
      console.log(localStorage.getItem('2454AC'));
  }

}

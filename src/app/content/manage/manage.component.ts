import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
    seats: number = 3;
    selectedSeats:string[] = [];
    checkedIn: boolean = false;
    name: string = "John Doe";
    cell: string = "012 345 6789";
    email: string = "johndoe@gmail.com";
    bookingInfo = { 
        id: 1,
        from: "",
        to: "",
        dateDepart: "",
        dateReturn: "",
        passengerType: {
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

    constructor() { }

    ngOnInit() {
        this.bookingInfo = JSON.parse(localStorage.getItem('1'));                     
    }

    public selectSeat(row: number, col: string) {
        let seat = row.toString() + col;
        // console.log(seat);
        // console.log(this.seats);
        let seatElement = <HTMLInputElement>document.getElementById(seat);

        if (!seatElement.checked) {
            this.seats++;
            // console.log("Increasing seats" + this.seats);
        } else if (this.seats > 0) {
            this.seats--;
            this.selectedSeats.push(seat);
            return;
        }

        let index: number = this.selectedSeats.indexOf(seat);
        if (index !== -1) {
            this.selectedSeats.splice(index, 1);
        }

        seatElement.checked = false;
    }

    public checkIn() {
        document.getElementById("btnCheckIn").setAttribute("disabled", 'true');
        this.checkedIn = true;
    }
}

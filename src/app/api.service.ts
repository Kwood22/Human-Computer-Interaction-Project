import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {

    bookingUrl = 'assets/data/booking.json';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'          
        })
    };

    getBooking() {
        return this.http.get(this.bookingUrl);
    }

    saveBooking(bookingObject: any) {
        return this.http.post(
            this.bookingUrl, 
            JSON.stringify(bookingObject), 
            this.httpOptions
        );
    }

}

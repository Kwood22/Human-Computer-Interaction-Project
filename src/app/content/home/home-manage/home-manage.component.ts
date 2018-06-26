import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-manage',
    templateUrl: './home-manage.component.html',
    styleUrls: ['./home-manage.component.css']
})
export class HomeManageComponent implements OnInit {

    userData = {
        surname: '',
        reference: ''
    };
    isInvalid: boolean;

    constructor(private router: Router) { }

    ngOnInit() {
        this.isInvalid = false;
    }

    submit() {
        if (this.validate()) {
            this.isInvalid = false;
            this.router.navigate(['/manage']);            
        } else {
            this.isInvalid = true;
        }
    }

    validate() {        
        if (this.userData.surname != '' && this.userData.reference == '2454AC') {            
            return true;
        }
        return false;
    }

}

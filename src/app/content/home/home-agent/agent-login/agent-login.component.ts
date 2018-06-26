import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent implements OnInit {

    userData = {
        code: '',
        password: ''
    };
    isInvalid: boolean;

    constructor(private router: Router) { }

    ngOnInit() {
        this.isInvalid = false;
    }

    submit() {
        if (this.validate()) {
            this.isInvalid = false;
            this.router.navigate(['/agent/book']);            
        } else {
            this.isInvalid = true;
        }
    }

    validate() {        
        if (this.userData.code != '' && this.userData.password == 'secret') {            
            return true;
        }
        return false;
    }

}

import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    carrets = ['bookCarret', 'manageCarret', 'agentCarret'];

    constructor(private router: Router) { }

    ngOnInit() {
        for (var i = 0 ; i < this.carrets.length ; i++) {
            document.getElementById(this.carrets[i]).style.visibility = "hidden";
        }

        if (this.router.url == "/home/book") {
            document.getElementById('bookCarret').style.visibility = "visible";
        }
        else if (this.router.url == "/home/manage") {
            document.getElementById('manageCarret').style.visibility = "visible";
        }
        else {
            document.getElementById('agentCarret').style.visibility = "visible";
        }            
    }

    public toggleCarret(carret: string) {
        for (var i = 0 ; i < this.carrets.length ; i++) {            
            document.getElementById(this.carrets[i]).style.visibility = "hidden";
        }
        document.getElementById(carret).style.visibility = "visible";

        $('.popover').popover('hide');
    }

}

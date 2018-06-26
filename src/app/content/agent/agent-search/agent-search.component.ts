import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../api.service';
declare var $: any;

@Component({
  selector: 'app-agent-search',
  templateUrl: './agent-search.component.html',
  styleUrls: ['./agent-search.component.css']
})
export class AgentSearchComponent implements OnInit {

    @ViewChild('datePicker') datePicker;

    // Hard-coded cities
    destinations = ['Bloemfontein', 'Cape Town Intl.', 'Gerorge', 'Hoedspruit', 'Margate', 'OR Thambo Intl.', 'Plettenberg Bay', 'Sishen Kathu'];
    destAbbreviation = ['BFN', 'CPT', 'GRJ', 'HDS', 'MGH', 'JNB', 'PBZ', 'SIS'];

    booking = {
        id: 0,
        from: "",
        to: "",
        date: "",  
        priceMin: "",
        priceMax: "",      
        oneWay: 1
    };

    found: boolean;
    open: boolean;

    constructor(private api: ApiService) { }

    ngOnInit() { 
        this.found = false;
        this.open = true;
        $(".popover").popover('hide');              
        this.togglePopover();         
    }

    togglePopover() {
        $(function () {            
            $("[data-toggle=popover]").each(function(i, obj) {
                $(this).popover({
                    html: true,
                    content: function() {
                        var id = $(this).attr('id')
                        return $('#popover-content-' + id).html();
                    }                    
                });                
            });
        });
    }    

    assignFrom(item) {
        this.booking.from = item;
    }

    assignTo(item) {
        this.booking.to = item;
    }

    search() {      
        this.open = false;  
        if (this.validBooking()) {
            this.found = true;
        } else {
            this.found = false;
        }        
    }

    validBooking() {
        let date = this.datePicker.nativeElement.value.substring(0,10);
        if (this.booking.from == 'OR Thambo Intl.' && this.booking.to == 'Margate' && date == '05/18/2018') {
            return true;
        }
        return false;
    }
    
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../content/home/home.component';
import { HomeBookComponent } from '../content/home/home-book/home-book.component';
import { HomeManageComponent } from '../content/home/home-manage/home-manage.component';
import { HomeAgentComponent } from '../content/home/home-agent/home-agent.component';
import { BookComponent } from '../content/book/book.component';
import { BookFlightsComponent } from '../content/book/book-flights/book-flights.component';
import { BookPassengerDetailsComponent } from '../content/book/book-passenger-details/book-passenger-details.component';
import { BookPassengerExtrasComponent } from '../content/book/book-passenger-extras/book-passenger-extras.component';
import { BookPaymentComponent } from '../content/book/book-payment/book-payment.component';
import { BookConfirmationComponent } from '../content/book/book-confirmation/book-confirmation.component';
import { WhereWeFlyComponent } from '../content/where-we-fly/where-we-fly.component';
import { AgentComponent } from '../content/agent/agent.component';
import { AgentLoginComponent } from '../content/home/home-agent/agent-login/agent-login.component';
import { AgentBookComponent } from '../content/agent/agent-book/agent-book.component';
import { AgentSearchComponent } from '../content/agent/agent-search/agent-search.component';
import { AboutUsComponent } from '../content/about-us/about-us.component';
import { FleetComponent } from '../content/fleet/fleet.component';
import { ManageComponent } from '../content/manage/manage.component';

const ROUTES: Routes = [
    { path: '', redirectTo: '/home/book', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, children: [
        { path: '', redirectTo: '/home/book', pathMatch: 'full' },
        { path: 'book', component: HomeBookComponent, pathMatch: 'full' },
        { path: 'manage', component: HomeManageComponent, pathMatch: 'full' },
        { path: 'agent', component: HomeAgentComponent, children: [
            { path: '', redirectTo: '/home/agent/signin', pathMatch: 'full' },
            { path: 'signin', component: AgentLoginComponent, pathMatch: 'full' }                       
        ]}           
    ]},
    { path: 'book', component: BookComponent, children: [
        { path: '', redirectTo: '/book/flights', pathMatch: 'full' },
        { path: 'flights', component: BookFlightsComponent, pathMatch: 'full' },
        { path: 'passenger/details', component: BookPassengerDetailsComponent, pathMatch: 'full' }, 
        { path: 'passenger/extras', component: BookPassengerExtrasComponent, pathMatch: 'full' },
        { path: 'payment', component: BookPaymentComponent, pathMatch: 'full' },  
        { path: 'confirmation', component: BookConfirmationComponent, pathMatch: 'full' },          
    ]},
    { path: 'destinations', component: WhereWeFlyComponent, pathMatch: 'full' },
    { path: 'agent', component: AgentComponent, children: [
        { path: '', redirectTo: '/agent/book', pathMatch: 'full' },
        { path: 'book', component: AgentBookComponent, pathMatch: 'full' },
        { path: 'search', component: AgentSearchComponent, pathMatch: 'full' }
    ]},
    { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
    { path: 'fleet', component: FleetComponent, pathMatch: 'full' },
    { path: 'where-to-fly', component: WhereWeFlyComponent, pathMatch: 'full' },
    { path: 'manage', component: ManageComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
  })
  export class RoutesModule { }

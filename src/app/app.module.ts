import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { HomeBookComponent } from './content/home/home-book/home-book.component';
import { HomeManageComponent } from './content/home/home-manage/home-manage.component';
import { HomeAgentComponent } from './content/home/home-agent/home-agent.component';
import { RoutesModule } from './routes/routes.module';
import { BookComponent } from './content/book/book.component';
import { BookFlightsComponent } from './content/book/book-flights/book-flights.component';
import { BookWizardComponent } from './content/book/book-wizard/book-wizard.component';
import { BookPassengerDetailsComponent } from './content/book/book-passenger-details/book-passenger-details.component';
import { BookPassengerExtrasComponent } from './content/book/book-passenger-extras/book-passenger-extras.component';
import { BookPaymentComponent } from './content/book/book-payment/book-payment.component';
import { BookConfirmationComponent } from './content/book/book-confirmation/book-confirmation.component';
import { WhereWeFlyComponent } from './content/where-we-fly/where-we-fly.component';
import { AgentComponent } from './content/agent/agent.component';
import { AgentLoginComponent } from './content/home/home-agent/agent-login/agent-login.component';
import { AgentSearchComponent } from './content/agent/agent-search/agent-search.component';
import { AgentBookComponent } from './content/agent/agent-book/agent-book.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { FleetComponent } from './content/fleet/fleet.component';
import { ManageComponent } from './content/manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    HomeBookComponent,
    HomeManageComponent,
    HomeAgentComponent,
    BookComponent,
    BookFlightsComponent,
    BookWizardComponent,
    BookPassengerDetailsComponent,
    BookPassengerExtrasComponent,
    BookPaymentComponent,
    BookConfirmationComponent,
    WhereWeFlyComponent,
    HomeAgentComponent,
    AgentComponent,
    AgentLoginComponent,
    AgentSearchComponent,
    AgentBookComponent,
    AboutUsComponent,
    FleetComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,    
    RoutesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

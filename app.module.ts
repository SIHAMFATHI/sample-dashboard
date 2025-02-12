import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ChartModule } from 'angular-highcharts';
import { CommonModule } from '@angular/common';

import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
@NgModule({
  declarations: [
   

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    ChartModule,
    CommonModule,
    FontAwesomeModule,
    HeaderComponent,
    SideNavComponent,
    AppComponent,
    MainComponent,
    SalesByMonthComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  faCoffee=faCoffee;
}
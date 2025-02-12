import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import {faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import {faPhone } from '@fortawesome/free-solid-svg-icons';
import {faHand } from '@fortawesome/free-solid-svg-icons';


import {FontAwesomeModule}from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-side-nav',
  imports: [FontAwesomeModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  faCoffee=faCoffee
 faDashboard  = faDashboard;
  faLocation = faLocation;
  faShop =  faShop;
  faBox =  faBox;
  faMoneyBill=faMoneyBill;
  faChartBar=faChartBar;
  faPhone=faPhone;
  faHand=faHand;
}

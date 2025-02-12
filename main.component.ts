import { Component } from '@angular/core';
import { TopWidgetsComponent } from "../top-widgets/top-widgets.component";
import { SalesByMonthComponent } from "../sales-by-month/sales-by-month.component";
import { SalesByCategoryComponent } from "../sales-by-category/sales-by-category.component";
import { LastFewTransactionComponent } from "../last-few-transaction/last-few-transaction.component";
import { TopThreeProductsComponent } from "../top-three-products/top-three-products.component";

@Component({
  selector: 'app-main',
  imports: [TopWidgetsComponent, SalesByMonthComponent, SalesByCategoryComponent, LastFewTransactionComponent, TopThreeProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

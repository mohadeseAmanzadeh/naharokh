import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StockTableComponent } from './stock-table/stock-table.component';
import { RulesComponent } from './rules/rules.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { NavVerticalComponent } from './nav-vertical/nav-vertical.component';
import { TradesComponent } from './trades/trades.component';
import { ConditionComponent } from './condition/condition.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { InvestmentComponent } from './investment/investment.component';
import { OrdersComponent } from './orders/orders.component';
import { MessageComponent } from './message/message.component';
import { DraftOrderComponent } from './draft-order/draft-order.component';
import { TodaysDealsComponent } from './todays-deals/todays-deals.component';
import { CurrentOrderComponent } from './current-order/current-order.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StockTableComponent,
    RulesComponent,
    SearchNavComponent,
    NavVerticalComponent,
    TradesComponent,
    ConditionComponent,
    AnalysisComponent,
    InvestmentComponent,
    OrdersComponent,
    MessageComponent,
    DraftOrderComponent,
    TodaysDealsComponent,
    CurrentOrderComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

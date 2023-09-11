import { Component } from '@angular/core';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})
export class TradesComponent {
  public activeOrder: number = 3;
  public titleList = [
    {
      id: 2,
      title: 'سفارش های درجریان'
    },
    {
      id: 1,
      title: 'سفارش های پیش نویس'
    },
    {
      id:3,
      title: 'معاملات امروز'
    }
  ]

}

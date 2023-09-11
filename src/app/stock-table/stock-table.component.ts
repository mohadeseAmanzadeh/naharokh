import { Component } from '@angular/core';
 interface insTableInterface {
  id:1,
      title: string,
      volume: string|number,
      percentPanel: string,
      panel: string|number,
      percent: string|number,
      price: number|string,
      buy: string,
      currency: string,
      demandPrice: number,
      demand: number|string,
      supply: number|string,
      sale: string,
      brEven: number,
      returns: number|string,
      inv: number
 }
@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class StockTableComponent {
  public instrumentsTable:insTableInterface[] = [
    { id:1,
      title: 'تکیمیا1',
      volume: '44.76 M',
      percentPanel: '1.25%',
      panel: '1,780',
      percent: '1.80%',
      price: '1.780',
      buy: 'خرید',
      currency: 'ریال',
      demandPrice: 30000,
      demand: '1,765',
      supply: '140,252',
      sale: 'فروش',
      brEven: 0,
      returns: '0%',
      inv: 0
    }
  ]
}

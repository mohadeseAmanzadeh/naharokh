import { Component } from '@angular/core';

interface ListItems {
  id: number,
  title: string
};

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.scss']
})
export class SearchNavComponent {
  public activeText: boolean = false;
  public activeDropdownSearch: boolean = false;
  public activeMenuSub: boolean = false;

  public listItems: ListItems[] = [
    {
      id: 1,
      title: 'عرضه اولیه'
    },
    {
      id: 2,
      title: 'پورتفو'
    },
    {
      id: 3,
      title: 'پتروشیمی'
    },
    {
      id:5,
      title:'طلا ملا'
    },
    {
      id:6,
      title:'زیر100تومن'
    },
    {
      id:7,
      title:'تسه'
    },
    {
      id:8,
      title:'زرشک1'
    },
    {
      id:9,
      title:'پالایشی'
    },
    {
      id:4,
      title:'سرخطی'
    },
    {
      id:4,
      title:'تت نظر3'
    },
    {
      id:4,
      title:'PE'
    },
  ]

  public favList = [
    {
      id:1, 
      title:'اپال',
      desc:'بنبیدیمبنرنیمنن',
      img: "https://www.nahayatnegar.com/images/company-not-found.jpg"
    },
    {
      id:1, 
      title:'اپال',
      desc:'بنبیدیمبنرنیمنن',
      img: "https://www.nahayatnegar.com/images/company-not-found.jpg"
    },
    {
      id:1, 
      title:'اپال',
      desc:'بنبیدیمبنرنیمنن',
      img: "https://www.nahayatnegar.com/images/company-not-found.jpg"
    },
    {
      id:1, 
      title:'اپال',
      desc:'بنبیدیمبنرنیمنن',
      img: "https://www.nahayatnegar.com/images/company-not-found.jpg"
    },
    {
      id:1, 
      title:'اپال',
      desc:'بنبیدیمبنرنیمنن',
      img: "https://www.nahayatnegar.com/images/company-not-found.jpg"
    },
    {
      id:1, 
      title:'اپال',
      desc:'بنبیدیمبنرنیمنن',
      img: "https://www.nahayatnegar.com/images/company-not-found.jpg"
    },
    {
      id:1, 
      title:'اپال',
      desc:'بنبیدیمبنرنیمنن',
      img: "https://www.nahayatnegar.com/images/company-not-found.jpg"
    },
    {
      id:1, 
      title:'اپال',
      desc:'بنبیدیمبنرنیمنن',
      img: "https://www.nahayatnegar.com/images/company-not-found.jpg"
    },
    {
      id:1, 
      title:'اپال',
      desc:'بنبیدیمبنرنیمنن',
      img: "https://www.nahayatnegar.com/images/company-not-found.jpg"
    },
    {
      id:1, 
      title:'اپال',
      desc:'بنبیدیمبنرنیمنن',
      img: "https://www.nahayatnegar.com/images/company-not-found.jpg"
    },
    {
      id:1, 
      title:'اپال',
      desc:'بنبیدیمبنرنیمنن',
      img: "https://www.nahayatnegar.com/images/company-not-found.jpg"
    },
  ]

}

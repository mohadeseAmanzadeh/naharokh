import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {
  public activeVertical : boolean = false
  public activeBody: number = 3;
  public iconList = [
    {id:1,
     title:'سفارش خرید وفروش', 
     img:"https://icongr.am/entypo/swap.svg?color=7d7d7d",
    },
    {id:2,
      title:'وضیعت مالی', 
      img:"/assets/images/icons8-coin-64.png",
     },
     {id:3,
      title:'پیام های ناظر بازار', 
      img:"https://icongr.am/entypo/mail.svg?color=7d7d7d",
     },
     {id:4,
      title:'تحلیل ها', 
      img:"https://icongr.am/feather/trending-up.svg?color=7d7d7d",
     },
     {id:5,
      title:'سرمایه گذاری حرفه ای', 
      img:"https://icongr.am/octicons/verified.svg?color=7d7d7d",
     },
  ]
  public activeVerticalPanel() {
    const verticalElement = document.querySelector('.vertical');
    verticalElement?.classList.add('active');
  }

}

import { Component } from '@angular/core';

interface MenuHeaderInterface {
  title : string
  subMenu?: SubMenuInterface[]
}

interface SubMenuInterface {
  title : string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public MenuHeader: MenuHeaderInterface[] = [
    {
      title: 'تالار معاملات',
    },
    {
      title: 'مدیریت پورتفو',
      subMenu: [
        {title:'خلاصه عملکرد'},
        {title:'کاردکس سهم'},
        {title:'اصلاح دستی پورتفو'},
        {title:'وضعیت شرکت درمجامع'},
        {title:'فهرست تسویه اوراق تبعی'},
      ]
    },
    {title: 'گزارش ها', 
      subMenu: [
        {title: 'فهرست سفارش ها'},
        {title: 'فهرست معاملات'},
        {title: 'گردش حساب'},
        {title: 'سبد دارایی'},
        {title: 'ورود وخروج کاربر'},
      ]
    },
    {title: 'مالی',
      subMenu: [
        {title: 'واریز وجه ازطریق شبکه شاپرک(شتاب)'},
        {title: 'واریز وجه ازطریق فیش بانکی'},
        {title: 'درخواست پراخت'},
        {title: 'فهرست درخواست های پرداخت'},
        {title: 'شماره حساب های کارگزاری'},
      ]
    },
    {title: 'کارگزار ناظر',
      subMenu: [
        {title: 'درخواست تغییر ناظر'},
        {title: 'فهرست درخواست های تغییر ناظر'},
      ]
    },
    {title: 'دستورها',
      subMenu: [
        {title: 'دستور خرید وفروش'},
        {title: 'فهرست دستورها'},
        {title: 'فهرست برگه های دستور برای تایید'}
      ]
    },
    {title: 'راهنما',
      subMenu: [
        {title: 'دانلود راهنمای سریع'},
        {title: 'راهنمای خید اعتبار'},
        {title: '1.نمای کلی'},
        {title: '2.دیده بان1 (شمای کلی)'},
        {title: '3.دیده بان2(فهرست سازی)'},
        {title: '4.اطلاعات سهم'},
        {title: '5.سفارش خرید'},
        {title: '6.سفارش فروش'},
        {title: '7.پنل سفارشات'},
      ]
    } 
  ]

}

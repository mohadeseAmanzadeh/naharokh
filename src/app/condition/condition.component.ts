import { Component } from '@angular/core';
  interface coditionInterface {
    title: string;
    value: string;
    text?: string
  }
@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent {
  public condition = [
    { 
      title: 'مانده کارگزاری',
      value: '161,773,767'
    },
    { 
      title: 'قدرت خرید',
      value: '568,614,863'
    },
    { 
      title: '',
      value: ''
    },
    { 
      title: 'ارزش روز سبد',
      value: '685,005,850'
    },
    { 
      title: 'خالص دارایی',
      value: '840,751,566'
    },
    { 
      title: 'حساب تضمین',
      value: '508,551,370'
    },
    { 
      title: '',
      value: ''
    },
    { 
      title: 'سهمیه اعتبار',
      value: '200,000,000'
    },
    { 
      title: 'اعتبار قابل خرید',
      value: '0',
      Text: 'خرید'
    },
    { 
      title: '',
      value: ''
    },
    { 
      title: 'طرح نهابان',
      value: '0'
    },
    { 
      title: 'مبلغ سرمایه گذاری',
      value: '162,000,000'
    },
    { 
      title: 'سود اعمال نشده',
      value: '0'
    },
    { 
      title: '',
      value: ''
    },
    { 
      title: 'خرید درجریان',
      value: '0'
    },
    { 
      title: 'فروش درجریان',
      value: '0'
    },
    { 
      title: 'خرید امروز',
      value: '0'
    },
    { 
      title: 'فروش امروز',
      value: '0'
    },
    { 
      title: '',
      value: ''
    },
    { 
      title: 'سود/زیان سبدجاری',
      value: '(21,613,035)'
    },
    { 
      title: 'بازده سبد جاری',
      value: '3.16%-'
    },
  ]
}

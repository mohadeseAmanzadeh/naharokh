import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.scss']
})
export class NavVerticalComponent implements OnInit {

  public systemTime: string = this.getSystemTime();

  ngOnInit(): void {
    setInterval(() => {
      this.systemTime = this.getSystemTime();
    }, 1000)  
  }

  public getSystemTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return hours + ':' + minutes + ':' + seconds
  }

  public getSystemDate() {
    const now = new Date();
    return now.getFullYear() + '/' + now.getMonth() + '/' + now.getDay();
  }

}

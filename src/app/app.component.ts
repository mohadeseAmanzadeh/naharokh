import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public activeVertical : boolean = false;

  public toggleModal(event: any) {
    const verticalElement: HTMLDivElement|null = document.querySelector('.vertical');
    verticalElement && verticalElement.classList.toggle('active');
        
  };
}

import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Service/subscribe.service';
// import { SubscribeService } from 'src/app/Service/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  // providers: [SubscribeService] // what to provide
})
export class SidebarComponent {

  // how to provide
  constructor(private subscribe:SubscribeService){

  }

  onSubscribe() {
    
    this.subscribe.onSubscribe('quarterly')
   
  }
}

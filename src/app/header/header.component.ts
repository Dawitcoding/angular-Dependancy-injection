import { Component } from '@angular/core';
import { SubscribeService } from '../Service/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers: [SubscribeService]
})
export class HeaderComponent {
  constructor(private subscribe: SubscribeService){}
  onSubscribe() {
    this.subscribe.onSubscribe('monthly');
  }
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked() {
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked() {
    this.selectedTab = 'admin';
  }
}

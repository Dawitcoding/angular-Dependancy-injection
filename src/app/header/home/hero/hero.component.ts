import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Service/subscribe.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // providers: [SubscribeService]
})
export class HeroComponent {
  // constructor(private subscribe: SubscribeService){}
  subscribe = inject(SubscribeService) // we can use this instead of constructor.
  
  onSubscribe(){
    
    this.subscribe.onSubscribe('yearly')
  }
}

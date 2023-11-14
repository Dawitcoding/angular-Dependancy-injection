import { Component } from '@angular/core';
import { SubscribeService } from './Service/subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [SubscribeService],
})
export class AppComponent {
  title = 'frist-angular';
}

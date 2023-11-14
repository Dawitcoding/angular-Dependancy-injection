import { Injectable } from "@angular/core";

@Injectable()
export class SubscribeService {
  onSubscribe(type: string) {
    alert('thanks for subscribing ' + type + ', now u can acess te service');
  }
}

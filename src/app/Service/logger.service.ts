import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
  LogMessage(name: string, status: string) {
    console.log(
      `New user with the name ${name} and status ${status} is added to user list.`
    );
  }
}

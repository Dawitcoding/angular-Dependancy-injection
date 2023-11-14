import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../Models/User';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {
  users: User[] = [
    new User('Abel', 'Male', 'Monthly', 'Active'),
    new User('Merry', 'Female', 'Quarterly', 'Active'),
    new User('Fanus', 'Male', 'Yearlly', 'InActive'),
  ];

  constructor(private logger:LoggerService){}

  OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

  OnShowUserDetails(user: User){
    this.OnUserDetailsClicked.emit(user)
  }

  GetAllUsers() {
    return this.users;
  }
  CreateUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.push(user);

    // let logger = new LoggerService()
    this.logger.LogMessage(name,status) 
  }
}

import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // providers: [UserService]
})
export class UserListComponent {
  constructor(private userService: UserService) {}

  userList = this.userService.GetAllUsers();
  
  showUserDetails(user:User){
    this.userService.OnShowUserDetails(user)
  }
}

import { Component, inject } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  selectedUser:User;
  userService = inject(UserService)

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data:User)=>{
      this.selectedUser = data;
      // console.log(this.selectedUser)
    })
  }
}

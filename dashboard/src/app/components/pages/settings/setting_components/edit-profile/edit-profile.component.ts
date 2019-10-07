import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {

  constructor(private us: UserServiceService) { }

  public user: User = this.us.user;

  ngOnInit() {
  }

  public getValFromTxtCompo(e?: string, name?: string) {
    this.user[name] = e;
  }

  public updateProfile() {
    console.log(this.user);
  }

}

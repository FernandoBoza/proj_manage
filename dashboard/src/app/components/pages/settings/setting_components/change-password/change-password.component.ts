import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import {UserServiceService} from "../../../../../services/user-service.service";

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent implements OnInit {

  constructor(private us: UserServiceService) { }
  public user: User = this.us.user;
  public newPassword: string = "";
  public confirmPassword: string = "";
  public confirm: boolean = true;

  ngOnInit() {
  }

  public updatePassword() {
    this.confirm = this.confirmPassword == this.newPassword;
  }

  public getValFromTxt(e?: string, name?: string) {
    this[name] = e;
  }
}

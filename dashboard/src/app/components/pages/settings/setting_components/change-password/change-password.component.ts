import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import {UserServiceService} from "../../../../../services/user-service.service";
import {CompanyService} from "../../../../../services/company.service";
import Util from "../../../../../Util";

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private us: UserServiceService
  ) { }

  public user: User = this.us.user;
  public newPassword: string = "";
  public confirmPassword: string = "";
  public err = {
    email: [],
    password: [],
    name: [],
    noAccount: "",
  };

  ngOnInit() {
  }

  public flushErr() {
    this.err = {
      noAccount: "",
      email: [],
      password: [],
      name: []
    }
  }

  public validationUserSignUp(){
    this.flushErr();
    return Util.validationUserSignUp(this.user.email,this.user.name, this.newPassword, this.confirmPassword, this.err);

  }

  // TODO BUG > on update, the value on the inputs in the edit-profile html doesn't show the name and email
  public updatePassword() {
    if (this.validationUserSignUp()) {
      this.user.password = this.newPassword;
      this.us.updateUserPassword(this.user).subscribe(res => {
        this.us.user = res;
        this.newPassword = "";
        this.confirmPassword = "";
      })
    }
  }


  public getValFromTxt(e?: string, name?: string) {
    this[name] = e;
  }
}

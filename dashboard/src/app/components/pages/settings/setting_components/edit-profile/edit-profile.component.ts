import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import {CompanyService} from "../../../../../services/company.service";
import {Company} from "../../../../../models/Company";

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {

  constructor(
    private us: UserServiceService,
    private cs: CompanyService
  ) { }

  public user: User = this.us.user;
  public company: Company = this.cs.company;

  ngOnInit() {
  }

  public getValFromTxtCompo(e?: string, name?: string) {
    this.user[name] = e;
  }

  public updateProfile() {
    console.log(this.user);
  }

}

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
  ) { }

  public user: User = this.us.user;
  public selectedFile: File;


  ngOnInit() {
  }

  public getValFromTxtCompo(e?: string, name?: string) {
    this.user[name] = e;
  }

  public updateProfile() {
    this.us.updateUser(this.user).subscribe(res => {
      this.us.user = res;
    })
  }

  onFileChanged(evt: any) {
    this.selectedFile = evt.target.files[0];
    console.log(this.selectedFile);
  }
}

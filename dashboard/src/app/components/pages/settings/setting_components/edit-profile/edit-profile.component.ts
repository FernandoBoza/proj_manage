import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MediaService} from "../../../../../services/media.service";

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {

  constructor(
    private us: UserServiceService,
    private ms: MediaService
  ) { }

  public user: User = this.us.user;
  public selectedFile: File;


  ngOnInit() {
  }

  public getValFromTxtCompo(e?: string, name?: string) {
    this.user[name] = e;
  }

  public updateProfile() {
    // this.us.updateUser(this.user).subscribe(res => {
    //   this.us.user = res;
    // })
    this.uploadMedia()
  }

  onFileChanged(evt: any) {
    this.selectedFile = evt.target.files[0];
  }

  private uploadMedia(){
    this.ms.uploadMedia(this.selectedFile).subscribe(res => {
      console.log(res);
    })
  }
}

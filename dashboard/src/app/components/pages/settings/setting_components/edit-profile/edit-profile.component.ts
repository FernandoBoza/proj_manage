import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MediaService} from "../../../../../services/media.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {

  constructor(
    private us: UserServiceService,
    private ms: MediaService,
    private http: HttpClient
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
    let formData = new FormData();
    formData.append("file", this.selectedFile, this.selectedFile.name);
    const HttpUploadOptions = {
      headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
    };
    this.http.post('http://localhost:8080/media/',formData, ).subscribe(res => console.log(res))
  }

  private uploadMedia(){
    this.ms.uploadMedia(this.selectedFile).subscribe(res => {
      console.log(res);
    })
  }
}

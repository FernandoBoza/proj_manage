import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'dropdown-user',
  templateUrl: './dropdown-user.component.html',
})
export class DropdownUserComponent implements OnInit {

  constructor(private user: UserServiceService) { }

  @Output() userSelected = new EventEmitter<any>();
  public selectedUser: any = {
    name: "Select User",
    img: ''
  }
  public dropdownToggle: boolean = false;

  ngOnInit() {
  }

  public get mockUser(): any {
    return this.user.mockUser;
  }

  public selectUser(user: any) {
    this.selectedUser = user
    this.userSelected.emit(user)
    this.dropdownToggle = false;
  }

  public toggleDropDown() {
    this.dropdownToggle = !this.dropdownToggle;
  }

}

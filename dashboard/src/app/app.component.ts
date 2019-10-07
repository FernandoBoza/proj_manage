import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import CONSTANTS from './services/Constants';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private user: UserServiceService,
    public util: UtilsService
  ) { }

  public expanded: boolean = false;
  public menu = CONSTANTS.menu;

  ngOnInit() { }

  public get isLoggedIn(): boolean {
    return this.user.isLoggedIn;
  }

  public get notif_card(): boolean {
    return this.util.notif_card;
  }

  public show_notif() {
    return this.util.show_notif();
  }

  public close_notif() {
    return this.util.close_notif();
  }

  public get users(): any[] {
    return this.user.mockUser
  }

  public expandChat() {
    this.expanded = !this.expanded
  }

}

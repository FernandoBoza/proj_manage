import { Component, OnInit } from '@angular/core';
import CONSTANTS from 'src/app/services/Constants';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',

})
export class NotificationsComponent implements OnInit {

  constructor() { }
  public notifications = CONSTANTS.notifications;

  ngOnInit() {
  }

  public notifIcon(department: string) {
    let icon: string;

    switch (department) {
      case "Development":
        icon = "fa-code"
        break;
      case "Sales":
        icon = "fa-analytics"
        break;
      case "Marketing":
        icon = "fa-megaphone"
        break;

      default:
        icon = "fa-paper-plane"
        break;
    }

    return icon
  }

}

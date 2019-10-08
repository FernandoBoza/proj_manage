import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public notif_card: boolean = false;
  public notif_info: any = {
    title: "",
    body: ""
  };

  public show_notif() {
    this.notif_card = true;
    setTimeout(() => {
      this.notif_card = false;
    }, 3500);
  }

  public close_notif() {
    this.notif_card = false;
  }
}

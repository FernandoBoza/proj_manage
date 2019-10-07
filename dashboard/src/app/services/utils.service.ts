import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public notif_card: boolean = false;
  public notif_info: any = {
    title: "This is fake data",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing."
  }

  public show_notif() {
    this.notif_card = true;
    setTimeout(() => {
      this.notif_card = false;
    }, 5000);
  }

  public close_notif() {
    this.notif_card = false;
  }
}

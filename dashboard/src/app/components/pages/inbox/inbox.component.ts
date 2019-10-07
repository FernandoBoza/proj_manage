import { Component, OnInit } from '@angular/core';
import CONSTANTS from 'src/app/services/Constants';
import * as moment from "moment"

@Component({
  selector: 'inbox',
  templateUrl: './inbox.component.html',
})
export class InboxComponent implements OnInit {

  constructor() { }

  public chat_history: any;
  public messages = CONSTANTS.messages;
  public chatHistory: any[];
  public selected: number = -1;
  public message: string;

  ngOnInit() {
  }

  public selectMsg(message: any, index: number) {
    this.chatHistory = message.thread;
    this.selected = index;
    this.message = ""
  }

  public sendMessage(e) {
    let m = {
      img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
      message: this.message,
      name: "Jane Smith",
      time: moment().format("h:mm A"),
    }
    this.chatHistory.push(m)
    this.message = ""
    e.scrollTop = e.scrollHeight;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
})
export class CreateTaskComponent implements OnInit {

  constructor() { }

  public dateSelected: string;

  ngOnInit() {
  }

  dateSelect(date: string) {
    this.dateSelected = date;
  }

  userSelected(user: any) {
    console.log(user);
  }

}

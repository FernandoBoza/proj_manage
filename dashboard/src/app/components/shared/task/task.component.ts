import { Component, OnInit, Input } from '@angular/core';
import Utils from 'src/app/Util';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {

  @Input() task: any;

  constructor() { }

  ngOnInit() {
  }

  public getStatus(status: string) {
    return Utils.getStatus(status);
  }

}

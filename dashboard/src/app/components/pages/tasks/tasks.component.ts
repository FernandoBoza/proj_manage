import { Component, OnInit, HostListener } from '@angular/core';
import CONSTANTS from 'src/app/services/Constants';
import Util from "../../../Util";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {

  constructor() { }
  public tasks_completed = CONSTANTS.tasks_completed;
  public tasks_pending = CONSTANTS.tasks_pending;
  public col_toggle: boolean = false;
  public selectedTask: any;
  public selectTaskCategory: any;
  public selected: number = 2;
  public modalToggle: boolean = false;


  ngOnInit() {
    this.selectTaskCategory = this.tasks_pending;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.col_toggle = false;
      this.modalToggle = false;
    }
  }

  public getStatus(status: string) {
    return Util.getStatus(status);
  }

  public select_task_category(n: number) {
    switch (n) {
      case 1:
        let arr = this.tasks_pending.concat(this.tasks_completed);
        this.selectTaskCategory = arr;
        this.selected = 1;
        break;
      case 2:
        this.selectTaskCategory = this.tasks_pending
        this.selected = 2;
        break;
      case 3:
        this.selectTaskCategory = this.tasks_pending
        this.selected = 3;
        break;
      case 4:
        this.selectTaskCategory = this.tasks_completed
        this.selected = 4;
        break;

      default:
        break;
    }
  }

  public expandTask(task?: any) {
    this.selectedTask = task;
    this.col_toggle = true;
  }

  public closePanel() {
    this.col_toggle = false;
  }

  public toggleModal() {
    this.modalToggle = !this.modalToggle;
  }
}

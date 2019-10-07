import { Component, OnInit, HostListener } from '@angular/core';
import * as moment from 'moment';
import CONSTANTS from 'src/app/services/Constants';
import Utils from 'src/app/Util';


@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {

  constructor() { }
  public col_toggle: boolean = false;
  public currentMonth = moment().format("MMMM YYYY");
  public currentTasks: any;
  public month: any = [];
  public tasks = CONSTANTS.tasks_pending;
  public taskToggle: boolean = false;
  public today: string = moment().format("MM/DD/YYYY");
  public dayOfWeek: string = moment().format("dddd");
  public currentDay: string = moment().format("dddd D");
  public daysLabel = [
    {
      long: "Monday",
      short: "mon",
    },
    {
      long: "Tuesday",
      short: "tue",
    },
    {
      long: "Wednesday",
      short: "wed",
    },
    {
      long: "Thursday",
      short: "thu",
    },
    {
      long: "Friday",
      short: "fri",
    },
    {
      long: "Saturday",
      short: "sat",
    },
    {
      long: "Sunday",
      short: "sun",
    },
  ]

  ngOnInit() {
    this.getDaysArray(moment().format('Y MM'));
    this.addTasksToMonthObj();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.col_toggle = false;
    }
  }

  public changeMonth(dir: string) {
    if (dir == "left") {
      let back = moment(`${this.currentMonth} 01 ${moment().format("YYYY")}`).subtract(1, 'months')
      this.getDaysArray(back.format("Y MM"));
      this.currentMonth = back.format("MMMM YYYY")
    } else if (dir == "right") {
      let next = moment(`${this.currentMonth} 01 ${moment().format("YYYY")}`).add(1, 'months')
      this.getDaysArray(next.format("Y MM"));
      this.currentMonth = next.format("MMMM YYYY")
    } else {
      this.currentMonth = moment().format("MMMM YYYY");
      this.getDaysArray(moment().format('Y MM'));
    }

    this.addTasksToMonthObj();
  }

  public addTasksToMonthObj() {
    this.month.forEach((day: any) => {
      let x = []
      this.tasks.forEach(task => {
        let taskDate = moment(task.dateLog).format("MM/DD/YYYY")
        if (day.fullDate == taskDate) {
          x.push(task)
          day.tasks = x
        }
      });
    });
  }

  public expandCalendar(day?) {
    if (day != undefined) {
      this.currentDay = moment(day.fullDate).format("dddd D");
      this.currentTasks = day.tasks
      this.col_toggle = true;
      this.taskToggle = false;
    } else {
      this.col_toggle = !this.col_toggle
    }
  }

  public getDaysArray(dateString: any) {
    this.month = Utils.getDaysArray(dateString);
  }

  public createTask(day) {
    this.currentDay = moment(day.fullDate).format("dddd D");
    this.taskToggle = true
    this.col_toggle = true;
  }
}
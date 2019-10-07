import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import Utils from 'src/app/Util';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent implements OnInit {

  constructor() { }
  @Output() dateSelected = new EventEmitter<string>();
  public dueDate: string;
  public currentMonth = moment().format("MMMM YYYY");
  public month: any = [];
  public today: string = moment().format("MM/DD/YYYY");
  public dayOfWeek: string = moment().format("dddd");
  public currentDay: string = moment().format("dddd D");
  public datePickerToggle: boolean = false;
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
  }

  public getDaysArray(dateString: any) {
    this.month = Utils.getDaysArray(dateString);
  }

  public selectDate(date: string) {
    this.dueDate = `: ${moment(date).format('MMM DD YYYY')}`;
    this.dateSelected.emit(date);
    this.datePickerToggle = false;
  }

  public showDatePicker() {
    this.datePickerToggle = !this.datePickerToggle
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
  }

}

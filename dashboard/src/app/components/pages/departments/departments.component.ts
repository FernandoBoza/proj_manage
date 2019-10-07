import { Component, OnInit } from '@angular/core';
import CONSTANTS from 'src/app/services/Constants';

@Component({
  selector: 'departments',
  templateUrl: './departments.component.html',
})
export class DepartmentsComponent implements OnInit {

  constructor() { }
  public departments = CONSTANTS.departments;
  public selected = -1;
  public department: any = [];


  ngOnInit() {
  }

  public selectDepartment(department: any, index: number) {
    this.department = department;
    this.selected = index;
  }

}

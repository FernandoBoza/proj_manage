import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {

  constructor() { }
  public selected: number = 1;

  ngOnInit() {
  }

  public selectSettings(n: number) {
    this.selected = n;
  }

}

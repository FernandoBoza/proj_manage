import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent implements OnInit {

  constructor() { }
  @Output() value = new EventEmitter<string>();
  @Input("class") class: string;
  @Input("label") label: string;
  @Input("model") model: any;
  @Input("type") type: any = "text";
  @Input("disabled") disabled: boolean = false;

  public passwordViewToggle: boolean = false;

  ngOnInit() {
  }

  public change() {
    this.value.emit(this.model)
  }

  public togglePasswordView() {
    this.passwordViewToggle = !this.passwordViewToggle;
  }

}

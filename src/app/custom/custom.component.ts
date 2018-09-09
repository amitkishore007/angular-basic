import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  customText = '';
  updatedText = '';
  constructor() { }

  ngOnInit() {
  }

  onTextCreate() {
    this.customText = 'Dynamic text created';
  }

  onUpdateText(event: Event) {
    this.updatedText = (<HTMLInputElement>event.target).value;
  }

}

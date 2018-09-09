import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcustom',
  templateUrl: './newcustom.component.html',
  // styleUrls: ['./newcustom.component.css']
  styles:[`
    p{
      color:red;
    }
  
  `]
})
export class NewcustomComponent implements OnInit {
  name:string = "Angular custom component";

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customfooter',
    templateUrl: 'customfooter.component.html',
    //templateUrl: './app.component.html',
    //styleUrls: ['../../../app.component.scss']
})

export class CustomFooterComponent  implements OnInit {

  public currentYear: number = new Date().getFullYear();
  constructor() {
    console.log('Footer constructor called');
  }

  ngOnInit() {
  } 
}
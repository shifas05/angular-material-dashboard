import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebarOpen = true;

  constructor() { }

  ngOnInit() {
  }

  sidebarToggle(event) {
    this.sidebarOpen = !this.sidebarOpen;
  }

}

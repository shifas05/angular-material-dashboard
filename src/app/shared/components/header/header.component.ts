import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'abe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe:EventEmitter<any> = new EventEmitter();
  primaryTheme: boolean = true;
  darkTheme: boolean = false;
  currentTheme: string = "primary";
  constructor() { }

  ngOnInit() {
  }

  toggldeSidebar() {
    this.toggleSidebarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
  }

  selectTheme(theme: string) {
    this.currentTheme = theme;
  }
}

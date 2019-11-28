import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-calendar',
  templateUrl: './sidebar-calendar.component.html',
  styleUrls: ['./sidebar-calendar.component.css']
})
export class SidebarCalendarComponent implements OnInit {
  value: Date;
  constructor() {}

  ngOnInit() {
  }

}

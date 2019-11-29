import { Component, OnInit, Input } from '@angular/core';
import { EventosComponent } from './eventos/eventos.component';
import { NextEventsComponent } from './next-events/next-events.component';



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  public events: any;

  constructor() {
    this.events = [
      {
          title: 'All Day Event',
          start: '2019-11-05',
          end: '2019-11-07'
      },
      {
          title: 'Long Event',
          start: '2019-11-21',
          end: '2019-11-22'
      },
      {
          title: 'Repeating Event',
          start: '2019-11-11T16:00:00'
      },
      {
          title: 'Repeating Event',
          start: '2019-12-04T16:00:00'
      },
      {
          title: 'Conference',
          start: '2019-11-28',
          end: '2019-11-30'
      }
    ];
   }

  ngOnInit() {
  }

}

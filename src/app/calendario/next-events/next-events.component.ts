import { Component, OnInit, Input } from '@angular/core';
import listPluging from '@fullcalendar/list';
// importo los modulos de fullcalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-next-events',
  templateUrl: './next-events.component.html',
  styleUrls: ['./next-events.component.css']
})
export class NextEventsComponent implements OnInit {

  @Input() events: any;

  public options: any;

  constructor() {
    this.options = {
      plugins: [listPluging, dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      defaultView: 'listWeek',
      header: {
          left: 'Proximos eventos'
      },
      editable: false
      };
   }

  ngOnInit() {
  }

}

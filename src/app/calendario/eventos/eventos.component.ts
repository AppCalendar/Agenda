import { Component, OnInit } from '@angular/core';
// importo los modulos de fullcalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  // array donde se guardaran los eventos
  public events: any[]; // Creo un array donde iran guardados los eventos.
  public options: any;

  // Cargo en el constructor datos iniciales
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
          start: '2019-12-10',
          end: '2019-12-12'
      }
    ];

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      }
    };

   }

  ngOnInit() {
  }
}

import { Component, OnInit, Input } from '@angular/core';
// importo los modulos de fullcalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  // array donde se guardaran los eventos
  @Input() events: any; // Creo un array donde iran guardados los eventos.
  public optionsMonth: any;
  public optionsList: any;

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
          start: '2019-11-28',
          end: '2019-11-30'
      }
    ];

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      defaulView: 'dayGridMonth',
      locale: esLocale, // establece el calendario en mi idioma
      header: {
          left: 'prev,next, today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      selectOverlap() {
        return console.log('Hola, has seleccionado un evento de una casilla!!');
      },
      dateClick(info) {
        alert('La fecha es: ' + info.dateStr);
        alert('Las coordenadas de la casilla son: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        alert('Tipo de dato actual es: ' + info.view.type);
        // cambiar color de la casilla una vez es seleccionada
        info.dayEl.style.backgroundColor = 'lightblue';
      },
      default: true,
      editable: false,
      selectable: true,
      unselectCancel: '.my-form'
    };

   }

  ngOnInit() {
  }
}

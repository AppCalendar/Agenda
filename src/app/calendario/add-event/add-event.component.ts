import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/event.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  public evento: Evento;
  public showEnd: boolean;

  constructor() {
    this.evento = new Evento({});

    this.evento.inicio = new Date();
    this.evento.fin = new Date();

    this.showEnd = false;
   }


  ngOnInit() {
  }

  addEvent() {

    if (this.showEnd) {
      this.evento.fin = null;
    }

    console.log(this.evento);
  }
}

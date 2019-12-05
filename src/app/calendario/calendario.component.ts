import { Component, OnInit, Input } from '@angular/core';
import { EventosComponent } from './eventos/eventos.component';



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  public events: any;

  constructor() {

   }

  ngOnInit() {
  }

}

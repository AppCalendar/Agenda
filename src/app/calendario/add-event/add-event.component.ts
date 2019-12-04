import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor() { }
  minDate = new Date();
  maxDate = new Date(2050, 12, 1);

  ngOnInit() {
  }

}

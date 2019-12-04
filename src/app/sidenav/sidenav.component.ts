import {Component} from '@angular/core';
import {AddEventComponent} from '../calendario/add-event/add-event.component';
import { MatDialog } from '@angular/material';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  showFiller = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddEventComponent);

  }
}



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalendarioComponent } from './calendario/calendario.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { HeaderComponent } from './header/header.component';
import { EventosComponent } from './calendario/eventos/eventos.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CalendarModule } from 'primeng/calendar';
import { SidebarCalendarComponent } from './sidebar/sidebar-calendar/sidebar-calendar.component';
import { PaginatorModule } from 'primeng/paginator';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatTreeModule } from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { AddEventComponent } from './calendario/add-event/add-event.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    HeaderComponent,
    EventosComponent,
    SidenavComponent,
    SidebarCalendarComponent,
    SidebarComponent,
    AddEventComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    CalendarModule,
    PaginatorModule,
    MatTreeModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    CheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddEventComponent]
})
export class AppModule {
  constructor() {}

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalendarioComponent } from './calendario/calendario.component';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { HeaderComponent } from './header/header.component';
import { EventosComponent } from './calendario/eventos/eventos.component';
import { NextEventsComponent } from './calendario/next-events/next-events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {CalendarModule} from 'primeng/calendar';
import { SidebarCalendarComponent } from './sidebar/sidebar-calendar/sidebar-calendar.component';
import {PaginatorModule} from 'primeng/paginator';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EventosSidebarComponent } from './sidebar/eventos-sidebar/eventos-sidebar.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    HeaderComponent,
    EventosComponent,
    NextEventsComponent,
    SidenavComponent,
    SidebarCalendarComponent,
    SidebarComponent,
    EventosSidebarComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

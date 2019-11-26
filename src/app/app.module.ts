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
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    HeaderComponent,
    EventosComponent,
    NextEventsComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

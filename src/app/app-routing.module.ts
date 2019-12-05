import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EventosComponent } from './calendario/eventos/eventos.component';
import { AddEventComponent } from './calendario/add-event/add-event.component';


const routes: Routes = [
  {path: 'eventos', component: EventosComponent},
  {path: 'add-event', component: AddEventComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'eventos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

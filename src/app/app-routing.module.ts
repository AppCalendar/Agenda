import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {path: 'events', component: SidenavComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'events'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMedecinComponent } from './dashboard-medecin.component';

const routes: Routes = [
  {path:"",component:DashboardMedecinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardMedecinRoutingModule { }

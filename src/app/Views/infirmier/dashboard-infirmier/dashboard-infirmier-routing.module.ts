import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardInfirmierComponent } from './dashboard-infirmier.component';

const routes: Routes = [
  {path:"",component:DashboardInfirmierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardInfirmierRoutingModule { }

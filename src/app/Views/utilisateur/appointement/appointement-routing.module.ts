import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointementComponent } from './appointement.component';

const routes: Routes = [
  {path:"",component:AppointementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointementRoutingModule { }

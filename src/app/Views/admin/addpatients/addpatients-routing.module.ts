import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpatientsComponent } from './addpatients.component';

const routes: Routes = [
  {path:"",component:AddpatientsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpatientsRoutingModule { }

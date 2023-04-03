import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RapportMedecinComponent } from './rapport-medecin.component';

const routes: Routes = [
  {path:"",component:RapportMedecinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RapportMedecinRoutingModule { }

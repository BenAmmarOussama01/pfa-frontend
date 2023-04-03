import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardMedecinRoutingModule } from './dashboard-medecin-routing.module';
import { DashboardMedecinComponent } from './dashboard-medecin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardMedecinComponent
  ],
  imports: [
    CommonModule,
    DashboardMedecinRoutingModule,
    FormsModule
  ]
})
export class DashboardMedecinModule { }

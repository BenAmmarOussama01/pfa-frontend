import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardInfirmierRoutingModule } from './dashboard-infirmier-routing.module';
import { DashboardInfirmierComponent } from './dashboard-infirmier.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardInfirmierComponent
  ],
  imports: [
    CommonModule,
    DashboardInfirmierRoutingModule,
    FormsModule
  ]
})
export class DashboardInfirmierModule { }

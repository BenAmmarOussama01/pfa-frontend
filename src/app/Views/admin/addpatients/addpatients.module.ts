import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpatientsRoutingModule } from './addpatients-routing.module';
import { AddpatientsComponent } from './addpatients.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddpatientsComponent
  ],
  imports: [
    CommonModule,
    AddpatientsRoutingModule,
    FormsModule
  ]
})
export class AddpatientsModule { }

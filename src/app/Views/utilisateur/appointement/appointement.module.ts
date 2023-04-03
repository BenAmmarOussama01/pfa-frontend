import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointementRoutingModule } from './appointement-routing.module';
import { AppointementComponent } from './appointement.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppointementComponent,


  ],
  imports: [
    CommonModule,
    AppointementRoutingModule,
    FormsModule
  ]
})
export class AppointementModule { }

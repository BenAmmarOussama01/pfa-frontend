import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientdetailsRoutingModule } from './patientdetails-routing.module';
import { PatientdetailsComponent } from './patientdetails.component';


@NgModule({
  declarations: [
    PatientdetailsComponent
  ],
  imports: [
    CommonModule,
    PatientdetailsRoutingModule
  ]
})
export class PatientdetailsModule { }

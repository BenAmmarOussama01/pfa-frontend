import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedecinsRoutingModule } from './medecins-routing.module';
import { MedecinsComponent } from './medecins.component';



@NgModule({
  declarations: [
    MedecinsComponent,

  ],
  imports: [
    CommonModule,
    MedecinsRoutingModule
  ]
})
export class MedecinsModule { }

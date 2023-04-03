import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapportMedecinRoutingModule } from './rapport-medecin-routing.module';
import { RapportMedecinComponent } from './rapport-medecin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RapportMedecinComponent
  ],
  imports: [
    CommonModule,
    RapportMedecinRoutingModule,
    FormsModule
  ]
})
export class RapportMedecinModule { }

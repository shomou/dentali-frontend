import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesListComponent } from './components/pacientes-list/pacientes-list.component';


@NgModule({
  declarations: [
    PacientesListComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule
  ]
})
export class PacientesModule { }

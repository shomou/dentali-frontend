import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TratamientosRoutingModule } from './tratamientos-routing.module';
import { TratamientosComponent } from './tratamientos.component';
import { TratamientosListComponent } from './components/tratamientos-list/tratamientos-list.component';
import { TratamientoDetailComponent } from './components/tratamiento-detail/tratamiento-detail.component';
import { TratamientoUploadComponent } from './components/tratamiento-upload/tratamiento-upload.component';


@NgModule({
  declarations: [
    TratamientosComponent,
    TratamientosListComponent,
    TratamientoDetailComponent,
    TratamientoUploadComponent
  ],
  imports: [
    CommonModule,
    TratamientosRoutingModule
  ]
})
export class TratamientosModule { }

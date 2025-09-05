import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesListComponent } from './components/pacientes-list/pacientes-list.component';

const routes: Routes = [
  {
    path: '', // La ruta raíz dentro de este módulo (ej. /pacientes)
    component: PacientesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasLlistComponent } from './components/citas-llist/citas-llist.component';

const routes: Routes = [
  {
    path: '', 
    component: CitasLlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }

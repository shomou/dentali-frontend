import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';


const routes: Routes = [
  // Ruta para el login, se muestra sin el layout principal
  {
    path: 'login',
    component: LoginComponent
  },

  // Ruta principal que usa el MainLayoutComponent
  // Todas las rutas hijas se renderizarán dentro de este layout
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard], // Futuro: aquí irá un guard para proteger las rutas
    children: [
      {
        path:'',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'pacientes',
        loadChildren: () => import('./pacientes/pacientes.module').then(m => m.PacientesModule)
      },
      {
        path: 'citas',
        loadChildren: () => import('./citas/citas.module').then(m => m.CitasModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
      { 
        path: 'tratamientos', 
        loadChildren: () => import('./tratamientos/tratamientos.module').then(m => m.TratamientosModule) 
  }
    ]
      
  },
  
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

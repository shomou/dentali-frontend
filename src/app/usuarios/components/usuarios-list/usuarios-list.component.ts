import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.scss'
})
export class UsuariosListComponent {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuariosService){ }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarioService.deleteUsuario(id).subscribe(() => {
        // Filtra el usuario eliminado de la lista para actualizar la vista al instante
        this.usuarios = this.usuarios.filter(u => u.id !== String(id));
      });
    }
  }

}

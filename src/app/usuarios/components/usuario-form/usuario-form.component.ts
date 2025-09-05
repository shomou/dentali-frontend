import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.scss'
})
export class UsuarioFormComponent implements OnInit {

  usuarioForm: FormGroup;
  isEditMode = false;
  currentUserId?: number;
 
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ){

    this.usuarioForm = this.fb.group({
      // Se elimina 'username' del formulario, ya que se deriva del email y causaba problemas de validación.
      password: ['', Validators.required],
      rol: ['usuario', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      especialidad: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.currentUserId = +id;

      // En modo edición, la contraseña no es obligatoria.
      // Eliminamos el validador 'required' para poder guardar sin cambiarla.
      const passwordControl = this.usuarioForm.get('password');
      passwordControl?.clearValidators();
      passwordControl?.updateValueAndValidity();

      this.usuarioService.getUsuarioById(this.currentUserId).subscribe(usuario => {
        this.usuarioForm.patchValue(usuario);
      });
    }
  }

  
  guardarUsuario(): void {
    if (this.usuarioForm.invalid) {
      // Marca todos los campos como "tocados" para mostrar los mensajes de error en el HTML.
      this.usuarioForm.markAllAsTouched();
      return;
    }

    const formValues = this.usuarioForm.value;

    const usuarioData: any = {
      // Mapeamos los campos del formulario a los que espera la API
      username: formValues.email, // El username es el email
      nombre: formValues.nombre,
      apellido: formValues.apellido,
      especialidad: formValues.especialidad,
      telefono: formValues.telefono,
      email: formValues.email,
      // Transformamos el rol. Asumo que tu API espera 'Role' con mayúscula.
      Role: formValues.rol === 'Administrador' ? 'ROLE_ADMIN' : 'ROLE_USER'
    };

    // Manejo de la contraseña
    if (this.isEditMode) {
      // En modo edición, solo incluimos la contraseña si el usuario escribió una.
      if (formValues.password) {
        usuarioData.password = formValues.password;
      }
    } else {
      // En modo creación, la contraseña es obligatoria (según el validador inicial).
      usuarioData.password = formValues.password;
    }

    if (this.isEditMode && this.currentUserId) {
      this.usuarioService.updateUsuario(this.currentUserId, usuarioData).subscribe(() =>{
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.usuarioService.createUsuario(usuarioData).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    }
  }
}

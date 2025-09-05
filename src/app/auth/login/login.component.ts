import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm! : FormGroup;
  loginError: string  | null = null;
  

  // Inyectamos FormBuilder para crear el formulario reactivo.
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router 
  ){}
  
  ngOnInit(): void {
      this.loginForm = this.fb.group({
        // Definimos los controles del formulario con sus validaciones
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
  }

  onSubmit(): void{
    this.loginError = null;
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return; // Si el formulario es inválido no hacemos nada
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: ()=> {this.router.navigate(['/dashboard'])},
      error: (err) => {this.loginError = 'Credenciales incorrectas, favor de intentarlo de nuevo.'}
    });

    // Aquí iría la lógica para autenticar al usuario usando AuthService
  }
}

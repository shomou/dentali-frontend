import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../../../environment/environment";
import { Router } from '@angular/router'

// Define una interfaz para la respuesta del backend
export interface AuthResponse {
    token: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private apiUrl = environment.apiUrl; // URL del backend
    
    constructor(private http: HttpClient, private router: Router){}

    // Enviar las credenciales al back
    login(credentials: any): Observable<AuthResponse> {
         console.log(credentials);
        return this.http.post<AuthResponse>(`${this.apiUrl}/users/login`, credentials).pipe(
            tap(response => {
                // Si el logines exitoso, se guarda el token.
               
                localStorage.setItem('authToken', response.token);
            })
        );
    }

    getToken(): string | null{
        return localStorage.getItem('authToken');
    }

    logout():void{
        // Elimina el token y cerrar session
        localStorage.removeItem('authToken');

        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean{
        // Comporbar si existe un token para saber si hay un ussr logueado.
        return !!localStorage.getItem('authToken');
    }
}
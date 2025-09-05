import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario.model";
import { environment } from "../../../../environment/environment"

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    private apiUrl = `${environment.apiUrl}/users`; // URL dque se consumirá -- debes cambiarlo por una variable de propiedades

    constructor(private http: HttpClient){}

    // Buscar Todos
    getUsuarios(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${this.apiUrl}/list`);
    }

    // Buscar por ID
    getUsuarioById(id: number): Observable<Usuario>{
        return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
    }

    // Crear Usuarios
    createUsuario(usuario: Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(`${this.apiUrl}/register`, usuario);
    }

    // Actualizar Usuarios
    updateUsuario(id: number, usuario: Usuario): Observable<Usuario>{
        return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
    }

    // Eliminar Usuarios
    deleteUsuario(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
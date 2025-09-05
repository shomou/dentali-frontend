import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamiento } from '../models/tratamiento.model';

@Injectable({ providedIn: 'root' })
export class TratamientosService {
    private apiUrl = 'http://localhost:8080/api/tratamientos';

    constructor(private http: HttpClient){}

    getTratamiento(pacienteId: string): Observable<Tratamiento[]> {
        return this.http.get<Tratamiento[]>(`${this.apiUrl}/paciente/${pacienteId}`);
    }
    
    agregarTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
        return this.http.post<Tratamiento>(this.apiUrl, tratamiento);
    }

    subirArchivo(tratamientoId: string, archivo: File): Observable<any> {
        const formData = new FormData();
        formData.append('archivo', archivo);
        return this.http.post(`${this.apiUrl}/${tratamientoId}/archivo`, formData);    
    } 
}
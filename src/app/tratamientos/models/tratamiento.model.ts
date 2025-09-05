export interface Tratamiento {
    id: string;
    pacienteId: string;
    nombre: string;
    descripcion: string;
    fecha: Date;
    archivos?: string[]; // nombres de archivos subidos
}
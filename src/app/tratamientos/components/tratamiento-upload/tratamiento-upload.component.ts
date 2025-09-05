import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TratamientosService } from '../../services/tratamiento.service';

@Component({
  selector: 'app-tratamiento-upload',
  templateUrl: './tratamiento-upload.component.html',
  styleUrl: './tratamiento-upload.component.scss'
})
export class TratamientoUploadComponent {
  selectedFile: File | null = null;
  tratamientoId: string = '';

  constructor(
    private route: ActivatedRoute,
    private tratamientosService: TratamientosService
  ){
    this.tratamientoId = this.route.snapshot.paramMap.get('tratamientoId')|| '';
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }

  onUpload(){
    if (this.selectedFile){
      this.tratamientosService.subirArchivo(this.tratamientoId, this.selectedFile)
      .subscribe({
        next:()=>alert('Archivo subido completamente'),
        error:(err)=>alert('Error al subir el archivo')
      });
    }
    
  }

}

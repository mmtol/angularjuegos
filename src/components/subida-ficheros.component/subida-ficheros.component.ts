import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import ServiceFicheros from '../../services/service.ficheros';
import Fichero from '../../models/Fichero';

@Component
({
  selector: 'app-subida-ficheros',
  standalone: false,
  templateUrl: './subida-ficheros.component.html',
  styleUrl: './subida-ficheros.component.css',
})
export class SubidaFicherosComponent 
{
  public fichero!:Fichero;
  public mensaje!:string;

  @ViewChild("cajaFichero") cajaFichero:ElementRef;

  constructor(private _service:ServiceFicheros)
  {
    this.cajaFichero = new ElementRef("");
  }

  subirFichero():void
  {
    let file = this.cajaFichero.nativeElement.files[0];
    let path = this.cajaFichero.nativeElement.value.split("\\");
    let fileName = path[2];
    let fileContent="";

    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () =>
    {
      let buffer:ArrayBuffer;
      buffer = reader.result as ArrayBuffer;
      var base64:string;
      base64 = btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
      fileContent=base64;
      this.fichero = new Fichero(fileName, fileContent);
      this._service.subirFichero(this.fichero).then(response =>
      {
        console.log(response);
        this.mensaje = "Fichero subido correctamente!!!";
      })
    }
  }
}

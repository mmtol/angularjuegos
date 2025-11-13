import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Fichero from "../models/Fichero";
import { environment } from "../environments/environment.development";

@Injectable()
export default class ServiceFicheros
{
    constructor(private _http:HttpClient){}

    subirFichero(fichero:Fichero)
    {
        let url = environment.ficheros;
        let endPoint = "api/TestingFiles";

        let data = JSON.stringify(fichero);
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");

        let promise = new Promise((resolve)=>
        {
            this._http.post(url+endPoint, data, {headers:header}).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }
}
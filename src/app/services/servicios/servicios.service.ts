
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
  })
  export class Serviciosservice {
  
    private API_Serve = "http://localhost:8080/api"
  
    constructor(
      private httpClient: HttpClient
    ) { }
    
    //Alistar  
    public getAllServicios(): Observable<any>{
      return this.httpClient.get(this.API_Serve + '/getEstado');
    }
  
  
  
    //Buscar por indificacion
    public searchCliente(documento:any): Observable<any>{
      return this.httpClient.get(this.API_Serve + "/query?documento=" + documento);
    }
    public idtServicios(servicios:any): Observable<any>{
      return this.httpClient.put(this.API_Serve + "/actualizar/" + servicios.IdUsuario,servicios);
    }
}
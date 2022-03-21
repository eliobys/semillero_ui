import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API_Serve = "http://localhost:3000/api"

  constructor(
    private httpClient: HttpClient
  ) { }
  
  //Alistar  
  public getAllusuario(): Observable<any>{
    return this.httpClient.get(this.API_Serve + '/get');
  }
  //Guardar
  public saveUsuario(usuario:any): Observable<any>{
    return this.httpClient.post(this.API_Serve + '/post', usuario);
  }
  //Buscar por indificacion
  public searchCliente(documento:any): Observable<any>{
    return this.httpClient.get(this.API_Serve + "/query?documento=" + documento);
  } 
}

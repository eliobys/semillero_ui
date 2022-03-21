import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiposervicioService {

  private API_Serve = 'http://localhost:3000/api/';

  constructor(private httpClient: HttpClient) {}

  //Alistar
  public getAlltiposervicio(): Observable<any> {
    return this.httpClient.get(this.API_Serve + 'getTipoDeServicios');
  }
  // Guardar
  public savetiposervicio(tiposervicio: any): Observable<any> {
    return this.httpClient.post(this.API_Serve + '/postTipoServicio', tiposervicio);
  }
  // //Actualizar
  // public idtCliente(cliente: any): Observable<any> {
  //   return this.httpClient.put(
  //     this.API_Serve + '/actualizar/' + cliente.clienteId,
  //     cliente
  //   );
  // }
}

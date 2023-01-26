import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';
import { IUser } from '@core/models/IUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserUpdatedService {

  private readonly URL = environment.api; //* localhost:3000

  constructor(private http: HttpClient) { }

  //* identificado al usuario queremos actualizar
  getUserById(id: number):Observable<IUser> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // { headers: headers}  => { headers }
    return this.http.get<IUser>(`${this.URL}/usuarios/${id}`, {headers});
  }

  //* Actualizamos al usuario en el servidor
  //* el id del usuario queremos actualizar
  //* usuario: IUser los nuevos datos actualizados a guardar en la BD (base de datos)
  updatedUser(id: number, usuario: IUser) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.URL}/usuarios/${id}`, usuario, { headers }).pipe(map( resp => {
      return true;
    }));
  }
}

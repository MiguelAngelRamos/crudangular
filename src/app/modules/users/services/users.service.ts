import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@core/models/IUser';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly URL = environment.api; //* http://localhost:3000
  constructor(private http: HttpClient) { }

  //* alt + 96
  getAllUser$():Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.URL}/usuarios`);
    //* `${this.URL}/usuarios` => http://localhost:3000/usuarios 
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../../core/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private baseUrl: string = environment.api;

  constructor(private http: HttpClient) { 

  }

  createUser(user: IUser) {
    //* alt + 96 ``
    return this.http.post(`${this.baseUrl}/usuarios`, user)
  }

  // createUser(user: IUser):Observable<IUser> {
  //   //* alt + 96 ``
  //   console.log(user);
  //   return this.http.post<IUser>(`${this.baseUrl}/usuarios`, user);
  // }
}

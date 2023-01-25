import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUpdatedService } from '@modules/updated-user/services/user-updated.service';
import { IUser } from '../../../../core/models/IUser';

@Component({
  selector: 'app-user-updated',
  templateUrl: './user-updated.component.html',
  styleUrls: ['./user-updated.component.css']
})
export class UserUpdatedComponent {

  //* [(ngModel)]
  public userHtml: IUser = {
    nombre: "",
    email: "",
    telefono: 0,
    empresa: ""
  }

  constructor( 
    private userUpdated: UserUpdatedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {

  }
  //* localhost:4200/user-updated/:id
  //* identificado al usuario queremos actualizar
  getUserById() {
    this.activatedRoute.paramMap.subscribe( params => {
      const id = Number(params.get('id'));
      this.userUpdated.getUserById(id).subscribe( user => this.userHtml = user)
    });
  }

   //* Actualizamos al usuario en el servidor (bd)
}

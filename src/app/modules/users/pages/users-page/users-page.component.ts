import { Component, OnInit } from '@angular/core';
import { UsersService } from '@modules/users/services/users.service';
import { IUser } from '../../../../core/models/IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  //* para poder renderizando en el html
  public usersHtml: IUser[] = [];
  // public users: Array<IUser> = [];
  constructor( private usersService: UsersService,
               private router: Router ) {

  }
  ngOnInit(): void {
    this.getUserAll();
  }

  //* método obtener a los usuarios, este metodo accede al servicio
  getUserAll() {
    this.usersService.getAllUser$().subscribe( users => {
      this.usersHtml = users;
      console.log(this.usersHtml);
    })
  }

  updatedUser(id: any) {
    this.router.navigate(['/user-updated', id]);
  }

  deleteUser(id: any) {
    console.log('deleteUser');
    console.log(id);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//* desde el padre (enrutador) localhost:4200
const routes: Routes = [
  {
    path: 'users', //* localhost:4200/users
    loadChildren: () => import('@modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: '**',
    redirectTo: '/users'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

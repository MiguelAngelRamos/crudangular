import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 //* login, register localhost:4200/auth
const routes: Routes = [
  {
    path: 'auth', //* "localhost:4200/auth" 
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

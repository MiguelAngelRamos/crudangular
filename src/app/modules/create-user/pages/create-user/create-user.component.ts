import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '@core/models/IUser';
import { CreateUserService } from '@modules/create-user/services/create-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnDestroy{
 
 forma!: FormGroup;
 errorSubmit: any [] = [];

 constructor(
  private router: Router,
  private formBuilder: FormBuilder,
  private createUserService: CreateUserService
 ) {
  this.crearFormulario();
 }

 ngOnDestroy(): void {
  console.log("Componente destruido"); // ngOnDestroy is not triggering
}

 crearFormulario(): void {
  this.forma = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]],
    telefono: ['', [Validators.required, Validators.minLength(5)]],
    empresa: ['', [Validators.required, Validators.minLength(3)]]
  });
 }

 createUser() {
  if(this.forma.valid) {
    this.createUserService.createUser(this.forma.value as IUser).subscribe();
    this.router.navigateByUrl('/users');
    this.forma.reset();
    return;
  }

  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No puedes crear un usuario sin completar los campos requeridos'
  });
 }

  
 get emailNoValido(): boolean {
  //* no cumple con la expresion regular y ademas a sido tocado
  return this.forma.get('email')!.invalid && this.forma.get('email')!.touched;
 }

 get telefonoNoValido(): boolean {
  return this.forma.get('telefono')!.invalid && this.forma.get('telefono')!.touched;
 }

 get empresaNoValido(): boolean {
  return this.forma.get('empresa')!.invalid && this.forma.get('empresa')!.touched;
 }

 

}

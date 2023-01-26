import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
 
 forma!: FormGroup;
 errorSubmit: any [] = [];

 constructor(
  private router: Router,
  private formBuilder: FormBuilder
 ) {}

 crearFormulario(): void {
  this.forma = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]],
    telefono: ['', [Validators.required, Validators.minLength(5)]],
  });
 }

 createUser() {
  if(this.forma.valid) {
    console.log('formulario puedo crear al usuario');
  }
 }

 get emailNoValido(): boolean {
  return this.forma.get('email')!.invalid && this.forma.get('email')!.touched;
 }

}

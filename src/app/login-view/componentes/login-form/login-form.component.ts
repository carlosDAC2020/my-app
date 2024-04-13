import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms" // modulo para doble enlace de datos
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


//models
import {User} from '../../../models/user'


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  // estdo de registro
  isRegister: boolean=false;
  // estado de login
  @Output() isLogin = new EventEmitter<boolean>();
  // usuario logeadi
  @Output() userLogged = new EventEmitter<User>();
  // token de autenticacion 
  @Output() token = new EventEmitter<string>();

  // usuario de referencia
  userReference: User = new User();

  constructor(private http: HttpClient) {}

  
  register(){
    if (this.isRegister==false) {
      // mostrar el formulario de registro 
      this.isRegister=true;
    }
    else{
      // parte del register
      this.registerUser();
      this.login()
    }
  }

  login() {
    this.http.post('http://127.0.0.1:8000/login/', { username: this.userReference.username, password: this.userReference.password })
      .subscribe((response:any) => {
        // Manejar la respuesta del login
        // asigna,mos elementos del usuarioasignado 
        this.userReference.email=response.user.email;
        this.userReference.id = response.user.id;
        this.userReference.username = response.user.username;
        this.userReference.email = response.user.email;
        this.userReference.password = response.user.password;
        this.userReference.first_name = response.user.first_name;
        this.userReference.last_name = response.user.last_name;
  
        // Emitir los valores del token y el usuario
        this.token.emit(response.token);
        this.userLogged.emit(this.userReference);
  
        // Cambiar el estado del login a true en el componente padre
        this.isLogin.emit(true);
      });
  }
  

  // Método para el registro
registerUser() {

  // Realizar la petición POST
  this.http.post('http://127.0.0.1:8000/register/', {
    username: this.userReference.username,
    password: this.userReference.password,
    first_name: this.userReference.first_name,
    last_name: this.userReference.last_name
  }).subscribe(response => {
    console.log(response)
  });
}


}

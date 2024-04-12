import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms" // modulo para doble enlace de datos

// servicios
import {ApiService} from '../../../services/api.service'

//models
import {User} from '../../../models/user'

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  // estdo de registro
  isRegister: boolean=false;
  // estado de login
  @Output() isLogin = new EventEmitter<boolean>();

  // usuario de referencia
  userReference: User =new User();

  constructor() {}

// private apiService: ApiService


  register(){
    if (this.isRegister==false) {
      // mostrar el formulario de registro 
      this.isRegister=true;
    }
    else{
      //this.apiService.register(this.userReference.username, this.userReference.password, this.userReference.first_name, this.userReference.last_name)
       // .subscribe(response => {
          // Manejar la respuesta del registro
          //console.log(response);
        //}, error => {
          // Manejar el error del registro
          //console.error(error);
        //});
      this.login()
    }
  }

  login(){
    // logica hacer login al usuario 
    //this.apiService.login(this.userReference.username, this.userReference.password)
      //.subscribe(response => {
        // Manejar la respuesta del login
        //console.log(response);
      //}, error => {
        // Manejar el error del login
        //console.error(error);
      //});
    // cambiar el estado del login a true en el componente padre 
    this.isLogin.emit(true)
  }

}

import { Component,EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms" // modulo para doble enlace de datos
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

//models
import {User} from '../../../models/user'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // propiedades 
  @Input() token: string="";
  @Input() userLogged: User = new User();

}

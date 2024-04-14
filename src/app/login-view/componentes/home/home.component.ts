import { Component,EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms" // modulo para doble enlace de datos

//models
import {User} from '../../../models/user'
import { Task } from '../../../models/task';

// componentes
import {TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // propiedades 
  @Input() token: string="";
  @Input() userLogged: User = new User();

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // directivas 
import {FormsModule} from "@angular/forms" // modulo para doble enlace de datos

// componentes
import { NavComponent } from './nav/nav.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            CommonModule,
            FormsModule,
            NavComponent,
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

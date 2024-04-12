import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

// componentes
import {LoginFormComponent} from './componentes/login-form/login-form.component'
import {HomeComponent} from './componentes/home/home.component'

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [LoginFormComponent, HomeComponent],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent {

  // adicion de clases para manejar estilos cuando se ingrese a la vista 
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'login-view-background');
  }

  // eliminaciond e clases para manejo de eslitols para cuando se sale de la vista
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'login-view-background');
  }

  isLogin: boolean=false;
}

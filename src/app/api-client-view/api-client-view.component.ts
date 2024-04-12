import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common'; // directivas 

// componentes 
import {ItemsFilterComponent} from "./components/items-filter/items-filter.component";
import { ItemsDetailComponent } from './components/items-detail/items-detail.component';

// modelos 
import {ApodResponse} from '../models/apod-response';

@Component({
  selector: 'app-api-client-view',
  standalone: true,
  imports: [ItemsFilterComponent, ItemsDetailComponent, CommonModule],
  templateUrl: './api-client-view.component.html',
  styleUrl: './api-client-view.component.css'
})
export class ApiClientViewComponent {
  
  // propiedades
  isFilter: boolean=true;
  
  apodDataArray: ApodResponse[]=[]; // consolidado de registros de la api 
  

  // adicion de clases para manejar estilos cuando se ingrese a la vista 
  constructor(private renderer: Renderer2) {
    // añadiendo fondo gradiente
    this.renderer.addClass(document.body, 'api-client-view-background');
    // fondo de cobertura trasnparente 
    const mainElement = document.querySelector('body main');
    if (mainElement) {
      this.renderer.addClass(mainElement, 'capa');
    }
  }
  // eliminaciond e clases para manejo de eslitols para cuando se sale de la vista
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'api-client-view-background');
  }
 
  // mostrar detail 
  // item selecionado para detail
  itemSelected: ApodResponse= new ApodResponse();
  showDeatil(item:ApodResponse){
    this.itemSelected = item;
    this.isFilter = false;
  }

}

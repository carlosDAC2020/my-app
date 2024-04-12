import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // directivas 
import {FormsModule} from "@angular/forms" // modulo para doble enlace de datos

// modelos 
import {ApodResponse} from '../../../models/apod-response';

@Component({
  selector: 'app-items-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './items-filter.component.html',
  styleUrl: './items-filter.component.css'
})
export class ItemsFilterComponent {

  


      // locales
  // valores de filtrado
  titleFilter:string='';
  startDateFilter:string='';
  endDateFilter:string='';
  currentDate:string='';

  // logica de uso de la api 
  apiUrl: string='';
  @Input() apodDataArray: ApodResponse[]=[]; // consolidado de registros 
  apodDataArraySearch: ApodResponse[]=[]; // valores obtenidos de busqueda
  cantRegisters: number = this.apodDataArray.length // cantidad de registros
  isFilter: boolean = false;

  // selecion de item
  @Output() itemSelected = new EventEmitter<ApodResponse>();

  // ma nejador de peticviones y asigancion de rango de fechas al filtro 
  constructor( private http: HttpClient) {
    
    // gerar rangod e fechas de filtrado de items 
    // Obtener la fecha actual en formato YYYY-MM-DD
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Establecer la fecha mínima como 16 de junio de 1995
    this.startDateFilter = '1995-06-16';
    
    // Establecer la fecha máxima como la fecha actual
    this.endDateFilter = currentDate;
  }

  // Manejo de API ---------------------------------------------------------------------------
  ngOnInit(): void {
      this.getAPOD(); // Llamada a la función para obtener los datos al inicializar el componente   
  }
  // peticion a la api 
  getAPOD() {
    const apiKey = 'jK7k2iyLNIwWMRXkngb6QNKSAADMUDtiT2jSDzD7';

    this.apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=6&concept_tags=True`;

    
    this.http.get(this.apiUrl).subscribe((data: any) => {
      this.apodDataArraySearch = data.filter((item: any) => item.hdurl && typeof item.hdurl === 'string'); 
      
    
    // agregamos los nuevos items de busqueda al array de registros 
    this.apodDataArray = this.apodDataArray.concat(this.apodDataArraySearch)
    this.cantRegisters = this.apodDataArray.length;
    });

  }

  // eventos de seleccion de items ----------------------------------------------------------
  // cambiar imagen de fondo al del item selecionado 
  changeBackground(imageUrl: any): void {
      const body = document.querySelector('body');
      if (body) {
        body.style.transition = 'background-image 0.5s ease';
        body.style.backgroundImage = `url('${imageUrl}')`;
      }
  }

  selctItem(item:ApodResponse){
    this.itemSelected.emit(item);
  }

  // filtrado de informacion ----------------------------------------------------------------

    // filtrado por titulo
  handleSearchName() {
      if (this.titleFilter.length>0) {
        // Filtrar la lista de empleados por nombre
        this.apodDataArraySearch = this.apodDataArray.filter(item => item.title?.toLowerCase().startsWith(this.titleFilter.toLowerCase()) );
        this.isFilter=true;
      }
      else{
        this.isFilter=false;
      }
  }
    // filtrado por fechas 
  handleSearchDateRange() {
      if (this.startDateFilter && this.endDateFilter) {
        // Filtrar la lista de elementos por el rango de fechas
        this.apodDataArraySearch = this.apodDataArray.filter(item => {
          // Verificar si item.date no es undefined
          if (item.date) {
            // Convertir las fechas a objetos Date para comparar
            const itemDate = new Date(item.date);
            const startDate = new Date(this.startDateFilter);
            const endDate = new Date(this.endDateFilter);
    
            // Retornar true si la fecha del elemento está dentro del rango
            return itemDate >= startDate && itemDate <= endDate;
          } else {
            return false; // Si item.date es undefined, no lo incluimos en el resultado
          }
        });
        this.isFilter = true;
      } else {
        this.isFilter = false;
      }
  }
    // limpiador de filtro 
  resetFilters() {
      this.titleFilter = '';
      this.startDateFilter = '';
      this.endDateFilter = '';
      this.isFilter = false;
  }    
}

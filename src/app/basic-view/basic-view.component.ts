import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // directivas 
import {FormsModule} from "@angular/forms" // modulo para doble enlace de datos
import { Renderer2 } from '@angular/core';

// modelos
import {Employee} from '../models/employee';

@Component({
  selector: 'app-basic-view',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './basic-view.component.html',
  styleUrl: './basic-view.component.css'
})
export class BasicViewComponent {

  // adicion de clases para manejar estilos cuando se ingrese a la vista 
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'basic-view-background');
  }

  // eliminaciond e clases para manejo de eslitols para cuando se sale de la vista
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'basic-view-background');
  }

  // datos 
  employeeArray: Employee[] = [
    {id: 1, name: "carlos", country: "colombia", role: "Programmer", age: 30},
    {id: 2, name: "daniel", country: "argentina", role: "Designer", age: 35},
    {id: 3, name: "jose", country: "EEUU", role: "Manager", age: 40}
  ];

  // CRUD section -------------------------------------------------------
  // empleado selecionado
  selectedEmployee: Employee = new Employee(); 
  // variavle de estado de selccion
  isEdit: boolean = false;

  // mdetodo manejador de eleccion de item
  openForEdit(employee:Employee){
    this.selectedEmployee = employee;
    this.isEdit = true
  }

  adOrEdit(){
    if (this.selectedEmployee.id==0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee(); 
    this.isEdit=false;
  }

  delete(){
    if (confirm("Are you sure you want to delete it")) {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee)
      this.selectedEmployee = new Employee(); 
      this.isEdit=false;
    }
  }
  // Search filter section ----------------------------------------------------------------

  // declaramos objeto de items a tener en cuenta para hacer los filtros de busqueda 
  filter_name: string="";
  filteredEmployees: Employee[]=[];
  isFilter: boolean=false

  handleSearch() {
    if (this.filter_name.length>0) {
      // Filtrar la lista de empleados por nombre
      this.filteredEmployees = this.employeeArray.filter(empl => empl.name?.toLowerCase().startsWith(this.filter_name.toLowerCase()) );
      this.isFilter=true;
    }
    else{
      this.isFilter=false;
    }
  }
}

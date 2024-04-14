import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms" // modulo para doble enlace de datos

// models
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  // propiedades 
  @Input() token: string="";
  listTasks: Task[] = [];
  selectedTask: Task = new Task();
  isAddTask: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.token)
    this.http.get('http://127.0.0.1:8000/tasks/', {
      headers: {
        Authorization: `Token ${this.token}`
      }
    })
      .subscribe((response:any) => {
        console.log(response.tasks)
        this.listTasks = response.tasks;
      }); 
  }

  selecTask(task:Task){
    this.isAddTask=false;
    this.selectedTask=task;
  }

  addTask() {
    console.log(this.token);
    const headers = new HttpHeaders({
      Authorization: `Token ${this.token}`
    });
  
    this.http.post('http://127.0.0.1:8000/create_task/', {
      title: this.selectedTask.title,
      description: this.selectedTask.description,
      status: this.selectedTask.status
    }, { headers })
      .subscribe((response: any) => {
        console.log(response.tasks);
        this.selectedTask = new Task();
      });
  }
  
  updateTask() {
    console.log(this.token);
    const headers = new HttpHeaders({
      Authorization: `Token ${this.token}`
    });
  
    this.http.put(`http://127.0.0.1:8000/update_task/${this.selectedTask.id}/`, {
      title: this.selectedTask.title,
      description: this.selectedTask.description,
      status: this.selectedTask.status
    }, { headers })
      .subscribe((response: any) => {
        console.log(response.tasks);
        this.isAddTask = true;
        this.selectedTask = new Task();
      });
  }
  
  deleteTask() {
    console.log(this.token);
    const headers = new HttpHeaders({
      Authorization: `Token ${this.token}`
    });
  
    this.http.delete(`http://127.0.0.1:8000/delete_task/${this.selectedTask.id}/`, { headers })
      .subscribe((response: any) => {
        console.log(response.tasks);
        this.isAddTask = true;
        this.selectedTask = new Task();
      });
  }
  
}

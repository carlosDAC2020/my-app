import { Component, EventEmitter, Input, Output } from '@angular/core';

// modelos 
import {ApodResponse} from '../../../models/apod-response';

@Component({
  selector: 'app-items-detail',
  standalone: true,
  imports: [],
  templateUrl: './items-detail.component.html',
  styleUrl: './items-detail.component.css'
})
export class ItemsDetailComponent {

  @Input() itemSelected: ApodResponse = new ApodResponse();
  
  @Output() return = new EventEmitter<boolean>();

  retunrFilter(){
    this.return.emit(true);
  }

}

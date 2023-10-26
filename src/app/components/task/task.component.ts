import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent {
  @Input() content:string = '';
  @Input() index:number = -1;

  constructor(private data:DataService){}

  removeTask(){
    this.data.removeTask(this.index);
  }
}

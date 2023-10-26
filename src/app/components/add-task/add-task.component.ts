import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent {
  task:string = "";

  constructor(private data:DataService){}

  addTask(){
    if(!this.task.length) return;
    this.data.addTask(this.task);
    this.task = "";
  }
}

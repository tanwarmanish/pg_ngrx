import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent {
  constructor(public data:DataService){}
}
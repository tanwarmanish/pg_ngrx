import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  taskList$:BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { }

  addTask(task:string){
    const tasks = this.taskList$.getValue();
    tasks.unshift(task);
    this.taskList$.next(tasks);
  }

  removeTask(index:number){
    const tasks = this.taskList$.getValue();
    tasks.splice(index,1);
    this.taskList$.next(tasks);
  }
}

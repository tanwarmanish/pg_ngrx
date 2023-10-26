import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tasks:any = [];

  constructor() { }

  addTask(task:string){
    this.tasks.unshift(task);
  }

  removeTask(index:number){
    this.tasks.splice(index,1);
  }
}

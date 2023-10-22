import * as fromStore from '.';
export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: fromStore.STATE;

  constructor(reducers = {}, initialState:fromStore.STATE = {}) {
    this.reducers = reducers;
    this.subscribers = [];
    this.state = initialState;
  }

  get value():fromStore.STATE {
    return this.state;
  }

  reduce(action:fromStore.ACTION):fromStore.STATE{
    const newState:fromStore.STATE = {};
    for(const prop in this.reducers){
      newState[prop] = this.reducers[prop](this.state[prop],action);
    }
    return newState;
  }
 
  dispatch(action:any):void{
   this.state = this.reduce(action);
   this.notify();
  }

  subscribe(fn:Function){
    this.subscribers = [...this.subscribers,fn];
    this.notify();
    return ()=>{
      this.subscribers = this.subscribers.filter(sub => sub!=fn );
    };
  }

  notify(){
    this.subscribers.forEach(fn=>fn(this.value));
  }
}

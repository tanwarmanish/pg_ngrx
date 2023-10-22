// constants
export const ADD_TODO = '[TO DO] Add To Do';
export const REMOVE_TODO = '[TO DO] Remove To Do';

// creators
export class AddToDo{
    readonly type = ADD_TODO;
    payload = null;
    constructor(payload:any){
        this.payload = payload;
    }
}

export class RemoveToDo{
    readonly type = REMOVE_TODO;
    payload:number;
    constructor(payload){
        this.payload = payload;
    }
}
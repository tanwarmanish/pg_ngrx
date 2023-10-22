import * as fromStore from '.';
let id = 2;

export function toDoReducer(state:any,action:any){
    switch(action.type){
        case fromStore.ADD_TODO:{
            return [
                ...state,
                {   
                    loading:false,
                    loaded:false,
                    id:id++,
                    ...action.payload
                }
            ];
        }
        case fromStore.REMOVE_TODO:{
            return state.filter((row)=>row.id!=action.payload);
        }
    }

    return state;
}
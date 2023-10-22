import * as fromStore from './store';

import { renderTodos } from './utils';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;


const initialState:fromStore.STATE = {
  toDo: [{ loading:false,loaded:false, id: 1, label: 'Eat pizza', complete: false }],
};

const reducers = {
  toDo: fromStore.toDoReducer
};

const store = new fromStore.Store(reducers,initialState);
const subscriber = store.subscribe(state=>renderTodos(state.toDo))


button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;
    const payload = { label: input.value, complete: false };
    store.dispatch(new fromStore.AddToDo(payload));
    input.value = '';
  },
  false
);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    store.dispatch(new fromStore.RemoveToDo(target.id));
  }
});

destroy.addEventListener('click',()=>subscriber());
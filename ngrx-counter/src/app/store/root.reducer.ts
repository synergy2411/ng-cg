// import { Action } from '@ngrx/store';
import * as counterActions from './counter.actions';

const initialState = {
  todos : [],
  counter : 0
}
export function rootReducer(state = initialState, action : counterActions.ActionTypes){
  switch (action.type) {
    case counterActions.INCREMENT : return { counter : state.counter + 1}
    case counterActions.DECREMENT: return { counter : state.counter - 1}
    case counterActions.ADD_COUNTER: return { counter : state.counter + action.payload}
    case counterActions.SUBSTRACT_COUNTER: return { counter : state.counter - action.payload}
    default: return state;
  }
}

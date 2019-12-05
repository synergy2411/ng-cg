
const initialState = {
  todos : [],
  counter : 0
}
export function rootReducer(state = initialState, action){
  switch (action.type) {
    case "INCREMENT": return { counter : state.counter + 1}
    case "DECREMENT": return { counter : state.counter - 1}
    default: return state;
  }
}

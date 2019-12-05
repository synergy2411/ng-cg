const { createStore } = require("redux");

const intialState = {
    counter : 0
}

// Reducer
function rootReducer(state = intialState, action){
    if(action.type === "INCREMENT"){
        return {
            counter : state.counter + 1
        }
    }else if (action.type === "DECREMENT"){
        return {
            counter : state.counter - 1
        }
    }else if(action.type === "ADD_NUMBER"){
        return {
            counter : state.counter + action.number
        }
    }else if(action.type==="SUBSTRACT_NUMBER"){
        return {
            counter : state.counter - action.number
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer);

// Subscribing
store.subscribe(()=>{
    console.log("[SUBSCRIBE]", store.getState());
})

// Dispatching Actions

store.dispatch({type : "INCREMENT"})

store.dispatch({type : "DECREMENT"})

store.dispatch({type : "ADD_NUMBER", number : 10})

store.dispatch({type : "SUBSTRACT_NUMBER", number : 5})
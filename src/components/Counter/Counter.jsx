import { useReducer, useState } from "react";

function CountReducer(state, action) {
// return prevState+nextState
    
    switch (action.type) {
        case 'increment':
            // return state + action.payload;
            return {...state, count: state.count + action.payload}
        case 'decrement':
            // return state - action.payload;
            return {...state, count: state.count - action.payload}
    
        default:
            throw new Error(`Unsuported action type ${action.type}`);
    }
}

export default function Counter() {
    // const [count, setCount] = useState(0);
    // const [state, dispatch] = useReducer(reducer, initialState, init)

    const [state, dispatch] = useReducer(CountReducer, { count: 0 });

    return (
        <div className="container">
            <p className="text"> {state.count}</p>
            <button className="btn btn-outline-success"
                type="button"
                onClick={()=> dispatch({type: 'increment', payload: 1})}
            >
                Збільшити
            </button>
            <button className="btn btn-outline-success"
                type="button"
                onClick={()=> dispatch({type: 'decrement', payload: 1})}
            >
                Зменшити
            </button>

        </div>
    )

}
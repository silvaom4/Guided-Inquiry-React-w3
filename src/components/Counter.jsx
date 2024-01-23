import React, { useReducer } from "react";
import easyCSS from '../css/easy.css'

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
      case 'DECREMENT':
        return {count: state.count - 1, showText: state.showText};
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};


const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });


 
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        className="counter-btn"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Add
      </button>

      <button 
        className="counter-btn"
        onClick={() => {
            dispatch({type: 'DECREMENT'})
        }}>Minus</button>

      {state.showText && <p>Click to Add or Subtract</p>}
    </div>
  );
};

export default ReducerExample;
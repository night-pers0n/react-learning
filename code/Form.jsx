import React, { useReducer } from 'react';

const initialState = { text: '', isValid: false };

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleChange = (e) => {
    dispatch({ type: 'handleInput', payload: e.target.value });
  };
  
  return (
    <div>
      <ExpensiveComponent />
      <input value={state.text} onchange={handleChange} />
      <Button disabled={!state.isValid}>Submit</Button>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'handleInput': 
      return {
        text: action.payload, 
        isValid: action.payload.length > 0
      };
      
    default: 
      throw new Error();
  }
}
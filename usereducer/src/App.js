import React, {useReducer} from 'react';
import './App.css';
import Usereducer2 from './usereducer2'

// something like Link
function reducer(state, action){
  
    switch(action.type){
      case 'increment':
          return state + 1
      case 'decrement':
        return state - 1
      default:
        return state
    }
}

function App() {

  // use reducer can do "mutiple action" in one state
  const [count, dispatch] = useReducer(reducer, 0)


  return (
    <div className="App">

      <Usereducer2 />
      <div> count : {count} </div>
      {/* dispatch action */}
      <button onClick={()=> dispatch({ type : "increment" })}> Increment</button>
      <button onClick={()=> dispatch({ type : "decrement" })}> decrement</button>

    </div>
  );
}

export default App;

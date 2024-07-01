import React from "react";
import Counter from "./components/Counter"
import { increment,decrement } from "./reduxtoolkit/counterSlice";
import {useSelector,useDispatch} from 'react-redux'


function App() {

  const myState=useSelector((state)=>state.counter.count)
  const dispatch=useDispatch()

  console.log(myState)
  return (
    <div className="App">
      <input type="text" value={myState} ></input>
        <button onClick={()=>dispatch(increment())}>Increment + </button>
       
        <button onClick={()=>dispatch(decrement())}>Decrement - </button>
    </div>
  );
}

export default App;

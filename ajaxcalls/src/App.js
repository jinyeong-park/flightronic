import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


// FUNCTIONAL COMPONENT WITH HOOKS
function App() {

  // useState hook - set var and initialize with value(constructor) and change with setCount
  // useState - return 2 things (current state and function to update the state)
  const [count, setCount] = useState(0)

  // componentDidMount
  // componentWillMount
  // componentWillUnMount
  // componentDidUpdate

  // useEffect takes callback function
  // after render() happens
  useEffect(() => {
    if (count % 3 === 0) {
      document.title = count
    }
  }
  )

  // function clickMeHandler() {
  //   // this.setState({count: this.state.count + 1});
  // }

    return (
      <div className="App">
        {/* <button onClick={(clickMeHandler)}>Click Me</button> */}
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <br/>
        {count}
        <br/>
      </div>
    );


}
export default App;

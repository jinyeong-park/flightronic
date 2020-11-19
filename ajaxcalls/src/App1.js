import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// CLASS COMPONENT WITH LIFE CYCLE
class App extends Component {

  // life cycle method1
  // constructor - initialize a state / create when class object is created
  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = {count: 0};
  }

  // life cycle method2
  // whenever a page refreshes
  componentDidMount() {
    console.log('componentDidMount')
  }

  // set the condition and whenever it is true, commponentDidUpdate
  shouldComponentUpdate(props, newState) {
    if (this.state.count%3 === 0) {
      return true;
    } else {
      return false;
    }
  }

  // life cycle method3
  componentDidUpdate() {
  // Everytime state changes, invoke componentDidUpdate
  console.log('componentDidUpdate')
  }

  clickMeHandler() {
    this.setState({count: this.state.count + 1});
  }

  handleClick(event) {
    console.log('clicked')
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => console.log('response.data', response.data))
    .catch(error => console.log('Error', error))
  }

  handlePostClick(event) {
    console.log('clicked')
    axios.post('http://test-routes.herokuapp.com/test/uppercase', {message: "I have something"})
    .then(response => console.log('response.data', response.data))
    .catch(error => console.log('Error', error))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.clickMeHandler.bind(this)}>Click Me</button>
        <br/>
        {this.state.count}
        <br/>
        <button onClick={this.handleClick.bind(this)}>Get Countries</button><br/>
        <button onClick={this.handlePostClick.bind(this)}>Convert to upper case</button>
      </div>
    );
  }

}
export default App;

import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  function handleClick(event) {
    console.log('clicked')
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => console.log('response.data', response.data))
    .catch(error => console.log('Error', error))
  }

  function handlePostClick(event) {
    console.log('clicked')
    axios.post('http://test-routes.herokuapp.com/test/uppercase', {message: "I have something"})
    .then(response => console.log('response.data', response.data))
    .catch(error => console.log('Error', error))
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Get Countries</button>
      <button onClick={handlePostClick}>Convert to upper case</button>


    </div>
  );
}

export default App;

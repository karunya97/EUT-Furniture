import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EUT from './components/EUT'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
class App extends Component { 
 render(){
  return (
    <div className="App">
    <EUT name="gaja"/>
    <EUT name="kasama"/>
   
    </div>
  );
}
}

export default App;

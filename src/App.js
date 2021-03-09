
import React, {Component} from 'react';
import logo from './logo.svg';
import totim from "./components/Blog1"
import './App.css';
import Welcome from "./components/Welcome"
import Blog1 from "./components/Blog1"
class App extends React.Component{
  render(){
    return (
      <div className="App">
       <Welcome />
       <Blog1 name ="Hermann"/>
      </div>
    );
  }
 
}

export default App;

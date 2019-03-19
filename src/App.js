import React, { Component } from 'react';
import Welcome from './Welcome.js'
import './App.css';



class App extends Component {
  render() {
    const names = ["Pedro", "Juan", "Laura"]
    return (
      <div>

        {names.map(name =>
            <Welcome name ={name} />
        )}
        <Welcome name = "Pedro" />
        <Welcome name = "Juan" />
      </div>
    );
  }
}

export default App;

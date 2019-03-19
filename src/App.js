import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      tasks: ["Tarea 1", "Tarea 2"]
    }
  }


  render() {
    return (
      <div>
        <h1>Hola Mundo</h1>
        <ul>
          {this.state.tasks.map(task =>
            <li>{task}</li>
          )}
        </ul>
        <button onClick={this.addTask.bind(this)}>Agregue un elemento</button>
        <button onClick={this.updateTask.bind(this)}>Modificar tarea 2</button>
      </div>
    );
  };

  addTask() {
    this.setState({
      tasks: this.state.tasks.concat("Nuevo elemento")
    });
  }

  updateTask() {
    const index = this.state.tasks.findIndex(task =>
        task === "Tarea 2"
      );

  // this.setState({
  //   tasks: this.state.tasks.map((task, i) =>
  //     i === index ? "Actualizado" : task
  //   )
  // })

  const tasks = this.state.tasks;
  
  this.setState({
    tasks: [
      ...tasks.slice(0, index),
      "Actualizado",
      ...tasks.slice(index + 1)
    ]
  });


  }
}

export default App;

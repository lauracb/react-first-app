import React, { Component } from 'react';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'
import './App.css';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const NoMatch = () => <h1>Página no encontrada</h1>
const Message = (props) => <h1> Mensaje {props.params.id}</h1>

const Template = () => {
  return(
    <div>
      <h1>Mi super aplicación</h1>
      {props.children}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Template} >
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
        </Route >
        <Route path="*" component={NoMatch} />
        <Route path="messages/:id" component={Message} />
      </Router>
    );
  }
}

export default App;

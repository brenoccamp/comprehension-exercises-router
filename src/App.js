import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import StrictAccess from "./StrictAccess";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <br></br>
            <li><Link to="/about">About</Link></li>
            <br></br>
            <li><Link to="/users">Users</Link></li>
            <br></br>
            <li><Link to="/strict-access">Strict Access</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning" />} />
          <Route path="/strict-access" render={() => (<StrictAccess user={ { username: 'joao', password: '1234' } } />)} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

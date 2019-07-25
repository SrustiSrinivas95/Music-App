import React, { Component } from 'react';
import CreateandSearch from '../src/components/Pages/CreateandSearch';
import './App.css';
import AddSong from '../src/components/Pages/AddSong';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//here it starts
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={CreateandSearch} />
            <Route path="/addsong" component={AddSong} />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;

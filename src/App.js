import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi i am an app</h1>
        <Person name="Max" age="28"/>
        <Person name="Cyrus" age="8">My hobby is racing</Person>
        <Person name="Peter" age="18"/>
    
      </div>
    
    );
  }
}

export default App;

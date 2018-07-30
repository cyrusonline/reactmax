import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:29},
      {name:'Stephanie',age:26},
    ]
  }

  switchNameHandler = (newName) =>{
    this.setState({
    persons:[
      {name:newName,age:28},
      {name:'Manu',age:29},
      {name:'Stephanie',age:33},
    ]
    
  })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi i am an app</h1>
        <button onClick={this.switchNameHandler.bind(this,'MongoDB')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'Gogogo')}>My hobby is racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    
      </div>
    
    );
  }
}

export default App;

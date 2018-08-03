import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {id:'a',name:'Max',age:28},
      {id:'b',name:'Manu',age:29},
      {id:'c',name:'Stephanie',age:26},
      
    ],
    showPersons: false
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

  nameChangedHandler = (event) =>{
    this.setState({
      persons:[
        {name:'Max',age:28},
        {name:event.target.value,age:29},
        {name:'Stephanie',age:26},
      ]
      
    })
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };

 
    let persons = null;
    
        if (this.state.showPersons) {
          persons = (
            <div>
            {this.state.persons.map((person,index)=>{
              return <Person 
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
               />
            })}
            </div>
            
          );
          style.backgroundColor = 'red';
          style[':hover'] = {
            backgroundColor: 'lightred',
            color:'black'
          }

        }
      let classes = [];
      if (this.state.persons.length <= 2) {
        classes.push('red')
      }
      if (this.state.persons.length <= 1) {
        classes.push('bold')
      }


    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi i am an app</h1>
        <p className={classes.join(' ')}>This is really work</p>
        <button 
        style = {style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
      </StyleRoot>
    
    );
  }
}

export default Radium(App);

import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    // returns promise
      .then(response => response.json())
      .then(users => this.setState({monsters: users }));
  }

  render () {
    const { monsters, searchField } = this.state;
    // equivalent to monsters = this.state.monsters etc
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <div className='App'>
        <input 
          type='search' 
          placeholder='Search Monsters' 
          onChange={e => 
            this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
};

export default App;
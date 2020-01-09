import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super()

    // this.handleChange = this.handleChange.bind(this) One of the way bind this in to the context of the current class
  }

  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users})
      )
  }
  handleChange = (e) => {
     this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    let filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchBox placeholder='Search monster' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;

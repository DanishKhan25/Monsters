import React, { Component } from "react"
import "./App.css"
import CardList from "./components/card-list/CardList"
import SearchBox from "./components/Search-Box/SearchBox"
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: "",
    }
    // this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }))
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    console.log("monsters :>> ", monsters)
    const filterdMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monster" handleChange={this.handleChange} />
        <CardList monsters={filterdMonsters} />
      </div>
    )
  }
}
export default App

import React, { Component } from 'react'
import Header from '../components/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  searchRepos(input) {
    return fetch(`https://api.github.com/search/repositories?q=${input}`)
      .then(res => res.json())
      .then(data => data.items.map(repo => ({
        name: repo.name,
        author: repo.owner.login,
        imageURL: repo.owner.avatar_url,
      })))
  }

  render() {
    this.searchRepos('react').then(x => console.log(x))
    return (
      <div className="App">
      <Header />
      </div>
    )
  }
}

export default App

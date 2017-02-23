import React, { Component } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

class App extends Component {

  constructor(props) {
    super(props)
    this.fetchRepos = this.fetchRepos.bind(this)
    this.state = {
      repos: []
    }
  }

  fetchRepos(input) {
    fetch(`https://api.github.com/search/repositories?q=${input}`)
      .then(res => res.json())
      .then((data) => {
        const repos = data.items.map(repo => ({
          name: repo.name,
          author: repo.owner.login,
          imageURL: repo.owner.avatar_url,
        }))
        console.log(repos)
        this.setState({ repos })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar fetchRepos={this.fetchRepos} />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import Header from '../components/Header'
import RepoList from '../components/RepoList'

class App extends Component {

  constructor(props) {
    super(props)
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
    this.fetchRepos('react')
    const { repos } = this.state
    return (
      <div className="App">
        <Header />
        <RepoList
          repos={repos}
        />
      </div>
    )
  }
}

export default App

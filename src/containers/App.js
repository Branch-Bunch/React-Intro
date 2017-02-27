import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import RepoList from '../components/RepoList'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      repos: []
    }
    this.fetchRepos = this.fetchRepos.bind(this)
  }

  fetchRepos(input) {
    fetch(`https://api.github.com/search/repositories?q=${input}`)
      .then(res => res.json())
      .then((data) => {
        const repos = data.items.map(repo => ({
          id: repo.id,
          name: repo.name,
          author: repo.owner.login,
          imageURL: repo.owner.avatar_url,
          url: repo.html_url,
        }))
        this.setState({ repos })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { repos } = this.state
    return (
      <div className="App">
        <Header />
        <SearchBar fetchRepos={this.fetchRepos} />
        <RepoList repos={repos} />
      </div>
    )
  }
}

export default App

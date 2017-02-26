import React from 'react'
import Header from '../components/Header'

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
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App

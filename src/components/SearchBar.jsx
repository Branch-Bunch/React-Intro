import React from 'react'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.updateRepo = this.updateRepo.bind(this)
    this.state = { repo: '' }
  }

  updateRepo(event) {
    this.setState({ repo: event.target.value })
  }

  render() {
    const { fetchRepos } = this.props
    const { repo } = this.state
    return (
      <div>
        <input 
          type="text" 
          value={repo} 
          onChange={this.updateRepo} 
        />
        <button onClick={() => fetchRepos(repo)}>
          Search
        </button>
      </div>
    )
  }
}

export default SearchBar

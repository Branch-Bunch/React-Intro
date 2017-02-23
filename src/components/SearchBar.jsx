import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.updateRepo = this.updateRepo.bind(this)
    this.state = { repo: '' }
  }

  updateRepo(event) {
    this.setState({repo: event.target.value})
  }

  render() {
    const { fetchRepos } = this.props
    const { repo } = this.state
    return (
      <form onSubmit={() => fetchRepos(repo)}>
        <input type="text" value={repo} onChange={this.updateRepo} />
        <input type="submit" value="Search" />
      </form>   
    )
  }
}

export default SearchBar

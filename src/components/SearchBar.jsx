import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.updateRepo = this.updateRepo.bind(this)
    this.state = {repo: ''}
  }

  updateRepo(event) {
    this.setState({value: event.target.value})
  }

  render() {
    const { fetchRepos } = this.props

    return (
      <form onSubmit={fetchRepos(this.state.repo)}>
        <input type="text" value={this.state.value} onChange={this.updateRepo} />
        <input type="submit" value="Search" />
      </form>   
    )
  }
}

export default SearchBar

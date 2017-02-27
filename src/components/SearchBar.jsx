import React from 'react'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { searchTerm: '' }
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateSearchTerm(event) {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit(event) {
    this.props.fetchRepos(this.state.searchTerm)
    event.preventDefault()
  }

  render() {
    const { searchTerm } = this.state
    return (
      <div>
        <h2>Search Repos</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Repo name..."
            value={searchTerm} 
            onChange={this.updateSearchTerm} 
          />
          <input 
            type="submit"
            value="Search"
          />
        </form>
      </div>
    )
  }
}

export default SearchBar

import React from 'react'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.updateSearchTerm= this.updateSearchTerm.bind(this)
    this.state = { searchTerm: '' }
  }

  updateSearchTerm(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const { fetchRepos } = this.props
    const { searchTerm } = this.state
    return (
      <div>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={this.updateSearchTerm} 
        />
        <button onClick={() => fetchRepos(searchTerm)}>
          Search
        </button>
      </div>
    )
  }
}

export default SearchBar

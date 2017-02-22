import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="repo" placeholder="Search" />
        <input type="submit" value="Search" />
      </form>   
    )
  }
}

export default SearchBar

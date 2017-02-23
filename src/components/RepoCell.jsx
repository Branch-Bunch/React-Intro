import React, { Component } from 'react'

class RepoCell extends Component {
  render() {
    const { name, author, imageURL } = this.props
    return (
      <span>
        <h3>Repo: {author}/{name}</h3>
        <img 
          src={imageURL} 
          width="200"
          height="200"
          alt="Icon not available"
        />
      </span>
    )
  }
}
 export default RepoCell

import React, { Component } from 'react'

class RepoCell extends Component {
  render() {
    const { name, author, imageURL, url } = this.props
    return (
      <span>
        <h3>Repo: {author}/{name}</h3>
        <a href={url}>
          <img 
            src={imageURL} 
            width="200"
            height="200"
            alt="Icon not available"
          />
        </a>
      </span>
    )
  }
}
 export default RepoCell

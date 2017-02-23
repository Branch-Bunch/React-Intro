import React, { Component } from 'react'
import RepoCell from './RepoCell'

class RepoList extends Component {
  render() {
    const { repos } = this.props
    const repoCells = repos.map(repo => (
      <RepoCell
        key={repo.id}
        name={repo.name}
        author={repo.author}
        imageURL={repo.imageURL}
      />
    ))

    return (
      <div>
        {repoCells}
      </div>
    )
  }
}

export default RepoList

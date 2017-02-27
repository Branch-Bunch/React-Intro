import React from 'react'
import RepoCell from './RepoCell'

const RepoList = ({ 
  repos,
}) => {
  const repoCells = repos.map(repo => (
    <RepoCell
      key={repo.id}
      name={repo.name}
      author={repo.author}
      imageURL={repo.imageURL}
      url={repo.url}
    />
  ))

  return (
    <div>
      {repoCells}
    </div>
  )
}

export default RepoList

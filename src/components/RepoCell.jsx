import React from 'react'

const RepoCell = ({
  name, 
  author, 
  imageURL, 
  url,
}) => (
  <div>
    <h3>Repo: {author}/{name}</h3>
    <a href={url}>
      <img 
        src={imageURL} 
        width="200"
        height="200"
        alt="Icon not available"
      />
    </a>
  </div>
)

export default RepoCell

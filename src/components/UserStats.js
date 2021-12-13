import React from 'react'

function UserStats(props){
  const {repos, followers, following} = props
  return(
    <div>
      <div>
        <p>Repos</p>
        <h3>{repos}</h3>
      </div>
      <div>
        <p>Followers</p>
        <h3>{followers}</h3>
      </div>
      <div>
        <p>Following</p>
        <h3>{following}</h3>
      </div>
    </div>
  )
}

export default UserStats;
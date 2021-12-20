import React from 'react'

function UserStats(props){
  const {repos, followers, following} = props
  return(
    <div className="stats__wrapper flex">
      <div className="stats-element__wrapper">
        <p className="text">Repos</p>
        <h3 className="subtitle">{repos}</h3>
      </div>
      <div>
        <p className="text">Followers</p>
        <h3 className="subtitle">{followers}</h3>
      </div>
      <div>
        <p className="text">Following</p>
        <h3 className="subtitle">{following}</h3>
      </div>
    </div>
  )
}

export default UserStats;
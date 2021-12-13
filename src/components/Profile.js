import React from 'react';

function Profile(props){
  const {avatar, name, url, joined, bio} = props

  return(
    <div>
      <div>
        <img src={avatar} alt="Profile picture"/>
        <div>
          <h3>{name}</h3>
          <a>{url}</a>
          <span>Joined {joined}</span>
        </div>
      </div>
      <p>{bio}</p>
    </div>
  )
}

export default Profile;
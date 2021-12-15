import React from 'react';

function Profile(props){
  const {avatar, name, url, joined, bio} = props

  const nameChange = () => {
    let splitUrl = url.split("/")
    return splitUrl[splitUrl.length - 1]
  }

  return(
    <div>
      <div>
        <img src={avatar} alt="Profile picture"/>
        <div>
          <h3>{name === null ? nameChange() : name }</h3>
          <a>{url}</a>
          <span>Joined {joined}</span>
        </div>
      </div>
      {bio === null ? (<p>This profile has no bio</p>) : (<p>{bio}</p>)}
    </div>
  )
}

export default Profile;
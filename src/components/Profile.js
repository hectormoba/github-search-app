import React from 'react';
import timeConventer from '../helpers/timeConventer'

function Profile(props){
  const {avatar, name, url, joined, bio} = props

  const nameChange = () => {
    let splitUrl = url.split("/")
    return splitUrl[splitUrl.length - 1]
  }

  const dateChange = () => {
    let shortDate = joined.split("T")[0];
    return timeConventer(shortDate)
  }

  return(
    <div>
      <div>
        <img className="profile__image" src={avatar} alt="Profile picture"/>
        <div>
          <h3>{name === null ? nameChange() : name }</h3>
          <a src={url}>@{url ? nameChange() : ''}</a>
          <span>Joined {joined ? dateChange() : ''}</span>
        </div>
      </div>
      {bio === null ? (<p>This profile has no bio</p>) : (<p>{bio}</p>)}
    </div>
  )
}

export default Profile;
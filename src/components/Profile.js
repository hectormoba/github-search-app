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
    <div className="profile__wrapper">
      <div className="profile-elements__wrapper grid">
        <img className="profile__image" src={avatar} alt="Profile picture"/>
        <div className="profile-inner__wrapper grid">
          <h3 className="subtitle">{name === null ? nameChange() : name }</h3>
          <a className="profile__anchor" target="_blank" href={url}>@{url ? nameChange() : ''}</a>
          <p className="text">Joined {joined ? dateChange() : ''}</p>
        </div>
      </div>
      <div className="grid__wrapper grid"></div>
        <p className="text--bio">{bio === null ? "This profile has no bio" : bio}</p>
    </div>
  )
}

export default Profile;
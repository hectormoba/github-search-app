import React, { useEffect, useState } from 'react';
import locationIcon from '../assets/icon-location.svg';
import urlIcon from '../assets/icon-website.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import companyIcon from '../assets/icon-company.svg'

function InfoItem(props){
  const {text, icon} = props

  return(
    (text === null || text === "" ) ? (
      <li className="user-info__list-item flex disabled">
        <img className="user-info__image" src={icon} alt="icon"/>
        <p className="text disabled">Not available</p>
      </li>
    ) :
    (
      <li className="user-info__list-item flex">
        <img className="user-info__image" src={icon} alt="icon"/>
        <p className="text">{text}</p>
      </li>
    )
  )
}

function UserInfo(props){
  const {company, twitter, location, urlSite} = props

  const urlChange = () => {
    let companyName = company.slice(1)
    return <a className="text" href={"https://github.com/" + companyName}>{companyName}</a>
    
  }

  return (
    <div className="grid__wrapper grid">
      <ul className="user-info__wrapper">
        <InfoItem icon={locationIcon} text={location} />
        <InfoItem icon={urlIcon} text={urlSite} />
        <InfoItem icon={twitterIcon} text={twitter} />
        <InfoItem icon={companyIcon} text={typeof company === "string" ? urlChange() : company} />
      </ul>
    </div>
  )
}

export default UserInfo;
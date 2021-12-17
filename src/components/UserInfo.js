import React, { useEffect, useState } from 'react';
import locationIcon from '../assets/icon-location.svg';
import urlIcon from '../assets/icon-website.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import companyIcon from '../assets/icon-company.svg'

function InfoItem(props){
  const {text, icon} = props

  return(
    <li>
      <img src={icon} alt="icon"/>
      {(text === null || text === "" )? (<b>Not available</b>): text}
    </li>
  )
}

function UserInfo(props){
  const {company, twitter, location, urlSite} = props

  const urlChange = () => {
    let companyName = company.slice(1)
    return <a src={"https://github.com/" + companyName}>{companyName}</a>
    
  }

  return (
    <ul>
      <InfoItem icon={locationIcon} text={location} />
      <InfoItem icon={urlIcon} text={urlSite} />
      <InfoItem icon={twitterIcon} text={twitter} />
      <InfoItem icon={companyIcon} text={typeof company === "string" ? urlChange() : company} />
    </ul>
  )
}

export default UserInfo;
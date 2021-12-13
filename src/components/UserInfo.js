import React from 'react';

function InfoItem(props){
  const {text, icon} = props
  return <li><img src={icon} alt="icon"/>{text}</li>
}

function UserInfo(props){
  const { company, location, siteUrl, twitter} = props

  return (
    <ul>
      <InfoItem text={location} />
      <InfoItem text={siteUrl} />
      <InfoItem text={twitter} />
      <InfoItem text={company} />
    </ul>
  )
}

export default UserInfo;
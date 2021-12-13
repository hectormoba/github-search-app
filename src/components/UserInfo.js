import React from 'react';
import locationIcon from '../assets/icon-location.svg';
import urlIcon from '../assets/icon-website.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import companyIcon from '../assets/icon-company.svg'

function InfoItem(props){
  const {text, icon} = props
  return <li><img src={icon} alt="icon"/>{text}</li>
}

function UserInfo(props){
  

  return (
    <ul>
      {props.userProps.map((element, index) => {
        return <InfoItem text={element} key={index} />
      })}
    </ul>
  )
}

export default UserInfo;
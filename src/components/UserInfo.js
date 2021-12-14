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
  const {company, twitter, location, urlSite} = props
  const propsIterator = [
    {
      icon: locationIcon,
      text: location
    },
    {
      icon: urlIcon,
      text: urlSite
    },
    {
      icon: twitterIcon,
      text: twitter
    },
    {
      icon: companyIcon,
      text: company
    }
  ]

  return (
    <ul>
      {propsIterator.map((element, index) => {
        return <InfoItem icon={element.icon} text={element.text} key={index} />
      })}
    </ul>
  )
}

export default UserInfo;
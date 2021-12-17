import React from 'react';
import moonIcon from '../assets/icon-moon.svg'
import sunIcon from '../assets/icon-moon.svg'

const colorTheme = {
  light: {
    name: "LIGHT",
    icon: sunIcon
  },
  dark: {
    name: "DARK",
    icon: moonIcon
  }
}

function Header(props){
  return(
    <header className="header flex">
      <h2 className="title">devfinder</h2>
      <div className="switcher__wrapper flex">
        <p className="switcher__text">{colorTheme.light.name}</p>
        <img className="switcher__image" src={colorTheme.light.icon} alt="Theme icon"/>
      </div>
    </header>
  )
}

export default Header;
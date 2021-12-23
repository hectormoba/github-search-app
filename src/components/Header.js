import React from 'react';
import moonIcon from '../assets/icon-moon.svg'
import sunIcon from '../assets/icon-sun.svg'

const colorTheme = {
  light: {
    name: "LIGHT",
    icon: sunIcon,
  },
  dark: {
    name: "DARK",
    icon: moonIcon
  }
}

function Header(props){
  const {themeColor} = props

  const handleClick = () => {
    props.changeTheme()
  }

  return(
    <header className="header flex">
      <h2 className="title">devfinder</h2>
      <button onClick={handleClick} className="switcher__button text flex">
        {themeColor === "dark" ? colorTheme.light.name : colorTheme.dark.name}
        <img className="switcher__image" src={themeColor === "dark" ? colorTheme.light.icon : colorTheme.dark.icon} alt="Theme icon"/>
      </button>
    </header>
  )
}

export default Header;
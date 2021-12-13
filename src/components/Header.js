import React from 'react';

function Header(props){
  return(
    <header>
      <h2>devfinder</h2>
      <div>
        <p>{props.changeTheme}</p>
        <p>{props.changeThemeIcon}</p>
      </div>
    </header>
  )
}

export default Header;
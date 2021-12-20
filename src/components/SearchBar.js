import React, { useState } from 'react';
import searchIcon from '../assets/icon-search.svg'

function SearchBar(props){
  const [input, setInput] = useState("");
  const {changeUser, fetchError} = props
  const handleChange = event => setInput(event.target.value)

  const handleSubmit = () => {
    changeUser(input)
  }

  let alertText;
  if(fetchError){
    alertText = <span className="error">No results</span>
  } else {
    alertText = null;
  }
  return(
    <div className="searchbar__wrapper width100 flex">
      <img className="searchbar__magnifier" src={searchIcon} alt="magnifier icon indicating a search bar"/>
      <input placeholder="Search Github username..." className="searchbar__input" type="text" value={input} onChange={handleChange}/>
      {alertText}
      <button className="button" onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default SearchBar;
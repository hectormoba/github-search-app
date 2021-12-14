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
    alertText = <span style={{color: "red"}}>No results</span>
  } else {
    alertText = null;
  }
  return(
    <div>
      <img src={searchIcon} alt="magnifier icon indicating a search bar"/>
      <input type="text" value={input} onChange={handleChange}/>
      {alertText}
      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default SearchBar;
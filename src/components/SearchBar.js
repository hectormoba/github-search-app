import React from 'react';

function SearchBar(){
  let alertText;
  if(false){
    alertText = <span>No results</span>
  } else {
    alertText = null;
  }
  return(
    <div>
      <img src="#" alt="magnifier icon indicating a search bar"/>
      <input type="text" />
      {alertText}
      <button>Search</button>
    </div>
  )
}

export default SearchBar;
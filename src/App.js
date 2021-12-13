import React, { useEffect, useState } from 'react'
import Header from './components/Header' ;
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import UserStats from './components/UserStats';
import UserInfo from './components/UserInfo';

// import LocationIcon from './assets/icon-location.svg';
// import UrlIcon from './assets/icon-website.svg'
// import TwitterIcon from './assets/icon-twitter.svg'
// import CompanyIcon from './assets/icon-company.svg'

function App(){
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
      .then(res => res.json())
      .then(
        (result) => {setUser(result)},
        (error) => setError(error)
      )
  },[])

  const {avatar_url, name, html_url, created_at, bio, public_repos, followers, following, company, twitter, location, blog} = user
  return(
    <div>
      <Header />
      <SearchBar />
      <Profile
        avatar={avatar_url}
        name={name}
        url={html_url}
        joined={created_at}
        bio={bio}
      />
      <UserStats 
        repos={public_repos}
        followers={followers}
        following={following}
      />
      <UserInfo
        company={company}
        location={location}
        siteUrl={blog}
        twitter={twitter}
      />
    </div>
  )
}

export default App
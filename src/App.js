import React, { useEffect, useState } from 'react'
import Header from './components/Header' ;
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import UserStats from './components/UserStats';
import UserInfo from './components/UserInfo';

function App(){
  const [error, setError] = useState(null);
  const [user, setUser] = useState("octocat");
  const [response, setResponse] = useState([])
  const [themeColor, setThemeColor] = useState(null);

  useEffect(() => {
    let myToken = "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"
    fetch(`https://api.github.com/users/${user}`, {
      headers: {
        'Authorization': `token ${myToken}`
      }
    })
      .then((res) => {
        if(res.ok) {
          setError(null)
          return res.json()
        }
        throw res
      })
      .then(
        (result) => {
          setResponse(result)
        },
        (err) => {
          setError(err)
        }
      )
  },[user])

  const {avatar_url, name, html_url, created_at, bio, public_repos, followers, following, company, twitter, location, blog} = response

  const changeUser = (string) => {
    setUser(string) 
  }

  return(
    <div>
      <Header />
      <SearchBar 
        changeUser={changeUser}  
        fetchError={error}
      />
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
        twitter={twitter}
        location={location}
        urlSite={blog}
      />
    </div>
  )
}

export default App
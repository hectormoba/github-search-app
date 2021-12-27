import React, { useEffect, useState } from 'react'
import Header from './components/Header' ;
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import UserStats from './components/UserStats';
import UserInfo from './components/UserInfo';
import "./styles/main.scss"

function App(){
  let theme = window.matchMedia("(prefers-color-scheme:dark)");
  const [error, setError] = useState(null);
  const [user, setUser] = useState("octocat");
  const [response, setResponse] = useState([])
  const [themeColor, setThemeColor] = useState(theme);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
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

  useEffect(()=> {
    let div = document.getElementById('themeContainer')
    if(themeColor === "dark"){
      div.classList.add("dark-theme")
    } else{
      div.classList.remove("dark-theme")
    }
  },[themeColor])

  const {avatar_url, name, html_url, created_at, bio, public_repos, followers, following, company, twitter_username, location, blog} = response

  const changeUser = (string) => {
    setUser(string) 
  }

  const changeTheme = () => {
    if(themeColor != "dark"){
      setThemeColor("dark");
    } else{
      setThemeColor("light")
    }
  }

  return(
    <div id="themeContainer" className="outter__wrapper flex">
      <div className="main__wrapper">
        <Header
          changeTheme={changeTheme}
          themeColor={themeColor}
        />
        <SearchBar 
          changeUser={changeUser}
          fetchError={error}
        />
        <div className="section__wrapper">
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
            twitter={twitter_username}
            location={location}
            urlSite={blog}
          />
        </div>
      </div>
    </div>
  )
}

export default App
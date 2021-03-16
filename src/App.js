import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import {Search} from './components/Search.js'
import {Users} from './components/Users.js'

// import { data } from "autoprefixer";

const githubUsersURL = `https://api.github.com/users`
const personal_token = `262b37151ddf3198a3d59acf03f36415bd1062c8`

export const App = () => {
  const [datas,setUsername] = useState([])

  useEffect(() => {
     getUsersGithub()
  },[])

  const getUsersGithub = () => {
    axios.get(githubUsersURL,{
        'headers': {
          'Authorization': `token ${personal_token}`
        }
      })
      .then( (response) => {
          setUsername(response.data)
        })
      .catch((error) => {console.error(error)})
  }
  

  return (
    <div class="grid grid-cols-1 md:grid-cols-3 h-screen">
        <div class='bg-white grid-cols-1 border-2 '>
          <Search />
          <Users datas={datas}/>
        </div>
        <div class="col-span-2 p-7">kanan</div>
    </div>
  );
}

export default App;

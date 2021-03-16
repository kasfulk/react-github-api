import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import { Users } from './components/Users'

// import { data } from "autoprefixer";

const githubUsersURL = `https://api.github.com/users`
// const personal_token = `262b37151ddf3198a3d59acf03f36415bd1062c8`

export const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getUsersGithub()
  }, [])

  const getUsersGithub = () => {
    axios.get(githubUsersURL)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => { console.error(error) })
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
      <div className='bg-white grid-cols-1 border-2'>
        <Search />
        <Users data={data} />
      </div>
      <div className="col-span-2 p-7">kanan</div>
    </div>
  );
}

export default App;

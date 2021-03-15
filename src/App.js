import { Octokit } from "@octokit/core";
import React, { useEffect } from "react";
import './App.css';

const octokit = new Octokit({ auth: `900c4fff4d607d217943633aa9b3d6d64d0eafc4` })

function App() {

  useEffect(() => {
    getGithubUsers();
  });

  async function getGithubUsers() {
    const result = await octokit.request("GET /users");
    console.log(result.data);
  }

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div class="bg-white col-span-1 md:col-span-2 shadow p-4 px-20 h-20 flex">
            <span class="w-auto flex justify-end items-center text-gray-500 p-2">
                <i class="material-icons text-3xl"><img src="search.svg" class="h-10 text-black" alt="search"/></i>
            </span>
            <input class="h-12 w-screen border shadow-sm rounded p-2 transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent" type="text" placeholder="Github Username" />
            <button class="bg-blue-400 mx-2 hover:bg-blue-300 transition-all duration-700 rounded text-white p-2 pl-4 pr-4">
                    <p class="font-semibold text-xs">Search</p>
            </button>
        </div>
        <div class="h-screen p-5">
          coba1
        </div>
        <div class="h-screen p-5">
          coba2
        </div>        
    </div>
  );
}

export default App;

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
    // eslint-disable-next-line react/style-prop-object
    <div class="mx-auto py-36 bg w-screen h-screen">
          <div class="bg-white shadow p-4 flex w-2/4">
            <span class="w-auto flex justify-end items-center text-gray-500 p-2">
                <i class="material-icons text-3xl"><img src="search.svg" class="h-10 text-black" alt="search"/></i>
            </span>
            <input class="w-full rounded p-2" type="text" placeholder="Github Username" />
            <button class="bg-blue-400 hover:bg-blue-300 rounded text-white p-2 pl-4 pr-4">
                    <p class="font-semibold text-xs">Search</p>
            </button>
        </div>
    </div>
  );
}

export default App;

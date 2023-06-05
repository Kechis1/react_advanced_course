import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ChuckNorrisJoke} from "./components/ChuckNorrisJoke";
import {AlbumVoting} from "./components/AlbumVoting";
import {UserProvider} from "./components/providers/UserProvider";
import {UserInfoPanel} from "./components/panels/UserInfoPanel";

function App() {
  return (
    <div className="App">
     {/* <ChuckNorrisJoke></ChuckNorrisJoke>*/}
       {/* <AlbumVoting></AlbumVoting>*/}
      <UserProvider>
          <UserInfoPanel></UserInfoPanel>
      </UserProvider>
    </div>
  );
}

export default App;

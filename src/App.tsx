import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ChuckNorrisJoke} from "./components/ChuckNorrisJoke";
import {AlbumVoting} from "./components/AlbumVoting";
import {UserProvider} from "./components/providers/UserProvider";
import {UserInfoPanel} from "./components/panels/UserInfoPanel";
import {JokeFetcher} from "./components/JokeFetcher";

function App() {
  return (
    <div className="App">
        {/*<ChuckNorrisJoke></ChuckNorrisJoke>*/}
       {/* <AlbumVoting></AlbumVoting>*/}
     {/* <UserProvider>
          <UserInfoPanel></UserInfoPanel>
      </UserProvider>*/}
        <JokeFetcher>
            {({joke, loading}) => <p>{loading ? 'Loading...' : joke.value}</p>}
        </JokeFetcher>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ChuckNorrisJoke} from "./components/ChuckNorrisJoke";
import {AlbumVoting} from "./components/AlbumVoting";
import {UserProvider} from "./components/providers/UserProvider";
import {UserInfoPanel} from "./components/panels/UserInfoPanel";
import {JokeFetcher} from "./components/JokeFetcher";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Layout} from "./layouts/Layout";
import {Categories} from "./components/Categories";
import {Category} from "./components/Category";
import {ThrowMe} from "./components/errors/ThrowMe";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'votes',
                element: <AlbumVoting />
            },
            {
                path: 'categories',
                element: <Categories />,
                children: [
                    {
                        path: ':categoryId',
                        element: <Category />
                    },
                ]
            },
            {
                path: 'error',
                element: <ThrowMe />,
            }
        ]
    }
]);

function App() {
  return (
    <div className="App">
        {/*<ChuckNorrisJoke></ChuckNorrisJoke>*/}
       {/* <AlbumVoting></AlbumVoting>*/}
     {/* <UserProvider>
          <UserInfoPanel></UserInfoPanel>
      </UserProvider>*/}
        {/*<JokeFetcher>
            {({joke, loading}) => <p>{loading ? 'Loading...' : joke.value}</p>}
        </JokeFetcher>*/}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;

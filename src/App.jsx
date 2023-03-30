import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/header';
import Movies from './component/Movies/Movie';
import Sidebar from './component/Sidebar/Sidebar';
import Movie from './component/Movies/Movie';

function App() {

  return (
    <div className="App">
     <Header></Header>
    <div className="container">
    <div className='mt-4 row'>
      <div className='movies-container col-md-8'>
        <Movie></Movie>
      </div>
      <div className="sidebar col-md-4 card">
        <Sidebar></Sidebar>
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default App

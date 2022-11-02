import React from 'react'

import { Navbar } from './components'; //add in any components
import { Footer, Header } from './containers'; //adds in containers
import { Datetime } from './pages'; //add in any pages
import './App.css';

const App = () => {
  return (
    <div classname = "App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Footer />
        <Datetime />
    </div>
  )
}

export default App
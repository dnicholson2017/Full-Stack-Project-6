import React, { useState } from 'react'
import CityCard from './components/card-1'
import VenueCard from './components/card-2'
import NextEventCard from './components/card-3'
import Events from './components/Events'
import Navigation from './components/Navigation'
import './App.css'

function App() {

  

  return (
    <div>
      <h1>Hello</h1>
      <div className='main-container'>
        <div>
          <Navigation/>
        </div>
        <div className='mini-container'>
          <div className='card-container'>
            <CityCard/>
            <VenueCard/>
            <NextEventCard/>
          </div>
          <div>
            <Events/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App

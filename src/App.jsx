import React, { useState, useEffect } from 'react'
import CityCard from './components/card-1'
import VenueCard from './components/card-2'
import NextEventCard from './components/card-3'
import Events from './components/Events'
import Navigation from './components/Navigation'
import './App.css'

function App() {

  const [list, setList] = useState(null);

  useEffect(() => {
    const findAllEvents = async () => {
      try {
        const response = await fetch("https://api.seatgeek.com/2/events?venue.id=6371&client_id=Mzk0NDI2OTZ8MTcwODQ0MzYyOC42NzMzNDA2");
        const json = await response.json();
        setList(json);
        console.log(json);
      }
      catch (error) {
        console.error("Error fetching data", error);
        throw error;
      }

    }

    findAllEvents().catch(console.error);  // ensure to call function outside of function definition

  }, []);

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
            <Events
              list={list}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App

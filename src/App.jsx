import React, { useState, useEffect } from 'react'
import CityCard from './components/card-1'
import VenueCard from './components/card-2'
import NextEventCard from './components/card-3'
import Events from './components/Events'
import EventChart from './components/EventChart'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY;


function App() {

  const [list, setList] = useState(null);

  useEffect(() => {
    const findAllEvents = async () => {
      try {
        const response = await fetch(`https://api.seatgeek.com/2/events?venue.id=6371&client_id=${API_KEY}`);
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
      <h1>Events Lite</h1>
      <div className='main-container'>
        <div className='mini-container'>
          {list && ( // Conditionally render components when list is not null
            <div className='card-container'>
              <CityCard list={list} />
              <VenueCard list={list} />
              <NextEventCard list={list} />
              <EventChart list={list.events} />
            </div>
          )}
          {list && <Events list={list} />} {/* Conditionally render Events component when list is not null */}
        </div>
      </div>
    </div>
  );

}

export default App

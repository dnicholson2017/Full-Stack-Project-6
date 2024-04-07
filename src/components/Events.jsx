import React, { useState, useEffect } from "react";
import "./Events.css";
import { Link } from "react-router-dom";

const Events = (props) => {
  const [filterResults, setFilterResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [maxPrice, setMaxPrice] = useState(0); 
  const [sliderValue, setSliderValue] = useState(0); // State to track slider value

  useEffect(() => {
    const prices = Object.keys(props.list.events).map(
      (eventId) => props.list.events[eventId].stats.highest_price
    );
    setMaxPrice(Math.max(...prices));
    setSliderValue(Math.max(...prices)); // Set slider value to maxPrice initially
  }, [props.list.events]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(props.list.events).filter((eventId) => {
        const event = props.list.events[eventId];
        return (
          event.datetime_local.toLowerCase().includes(searchValue.toLowerCase()) ||
          event.performers[0].name.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setFilterResults(filteredData);
    } else {
      setFilterResults([]);
    }
  };

  const filterByMaxPrice = (value) => {
    const filteredData = Object.keys(props.list.events).filter((eventId) => {
      const event = props.list.events[eventId];
      return event.stats.highest_price <= value;
    });
    setFilterResults(filteredData);
    setSliderValue(value); // Update slider value
  };

  return (
    <div>
      <div className="filter-container">
        <div className="search-filter">
          <h4>Date</h4>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
        <div className="slider-filter">
          <h4>Max Price</h4>
          <input
            type="range"
            name="max-price-filter"
            min={0}
            max={maxPrice}
            step={100}
            value={sliderValue} // Bind slider value to state variable
            onChange={(e) => filterByMaxPrice(parseInt(e.target.value))}
          />
          <span>{sliderValue}</span> {/* Display slider value */}
        </div>
      </div>
      {(searchInput !== "" && filterResults.length === 0) ? (
        <div>No results found</div>
      ) : (
        <div className="event-columns">
          {/* Render column headers */}
          <div>
            <h3>Date</h3>
              {filterResults.length === 0 && Object.keys(props.list.events).map((eventId, index) => (
                <Link to={`/eventDetails/${props.list.events[eventId].id}`} key={props.list.events[eventId].id}>
                  <ul key={index}>
                    <li>{props.list.events[eventId].datetime_local}</li>
                  </ul>
                </Link>
              ))}
              {filterResults.length > 0 &&
                filterResults.map((eventId, index) => (
                  <ul key={index}>
                    <li>{props.list.events[eventId].datetime_local}</li>
                  </ul>
              ))}
          </div>
          <div>
            <h3>Performer</h3>
            {filterResults.length === 0 && props.list.events.map((event, index) => (
              <ul key={index}>
                <li>{event.performers[0].name}</li>
              </ul>
            ))}
            {filterResults.length > 0 && filterResults.map((eventId, index) => (
              <ul key={index}>
                <li>{props.list.events[eventId].performers[0].name}</li>
              </ul>
            ))}
          </div>
          <div className="min-price">
            <h3>Min Price</h3>
            {filterResults.length === 0 && props.list.events.map((event, index) => (
              <ul key={index}>
                <li>{event.stats.lowest_price}</li>
              </ul>
            ))}
            {filterResults.length > 0 && filterResults.map((eventId, index) => (
              <ul key={index}>
                <li>{props.list.events[eventId].stats.lowest_price}</li>
              </ul>
            ))}
          </div>
          <div>
            <h3>Max Price</h3>
            {filterResults.length === 0 && props.list.events.map((event, index) => (
              <ul key={index}>
                <li>{event.stats.highest_price}</li>
              </ul>
            ))}
            {filterResults.length > 0 && filterResults.map((eventId, index) => (
              <ul key={index}>
                <li>{props.list.events[eventId].stats.highest_price}</li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;

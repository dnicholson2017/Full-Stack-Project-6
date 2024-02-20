import React, { useState } from "react";
import "./Events.css";

const Events = (props) => {
  const [filterResults, setFilterResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
      setFilterResults(Object.keys(props.list.events));
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <div className="event-columns">
        <div>
          <h3>Date</h3>
          {filterResults.map((eventId, index) => (
            <ul key={index}>
              <li>{props.list.events[eventId].datetime_local}</li>
            </ul>
          ))}
        </div>
        <div>
          <h3>Performer</h3>
          {filterResults.map((eventId, index) => (
            <ul key={index}>
              <li>{props.list.events[eventId].performers[0].name}</li>
            </ul>
          ))}
        </div>
        <div className="min-price">
          <h3>Min Price</h3>
          {filterResults.map((eventId, index) => (
            <ul key={index}>
              <li>{props.list.events[eventId].stats.lowest_price}</li>
            </ul>
          ))}
        </div>
        <div>
          <h3>Max Price</h3>
          {filterResults.map((eventId, index) => (
            <ul key={index}>
              <li>{props.list.events[eventId].stats.highest_price}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

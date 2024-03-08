import React, { useState } from "react";
import "./Events.css";
import { Link } from "react-router-dom";

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
      setFilterResults([]);
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
      {(searchInput !== "" && filterResults.length === 0) ? (
        <div>No results found</div>
      ) : (
        <div className="event-columns">
          {/* Render column headers */}
          <div>
            <h3>Date</h3>
              {filterResults.length === 0 && props.list.events.map((event, index) => (
                <Link to={`/eventDetails/${event.id}`} key={event.id}>
                  <ul key={index}>
                    <li>{event.datetime_local}</li>
                  </ul>
                </Link>
              ))}
              {filterResults.length > 0 && filterResults.map((eventId, index) => (
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

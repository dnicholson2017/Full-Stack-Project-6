import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EventChart from "./EventChart";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const EventDetails = () => {
  const params = useParams();
  const [fullDetails, setFullDetails] = useState(null);

  useEffect(() => {
    const callAPI = async () => {
      const call = await fetch(
        `https://api.seatgeek.com/2/events?id=${params.symbol}&client_id=${API_KEY}`
      );
      const response = await call.json();
      console.log(response);
      setFullDetails(response);
    };
    callAPI().catch(console.error);
  }, [params.symbol]);

  if (!fullDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{fullDetails.events[0].title}</h1>
      <h2>Venue: {fullDetails.events[0].venue.name}</h2>
      <h2>Time: {fullDetails.events[0].datetime_local}</h2>
      <h3>Event Type: {fullDetails.events[0].taxonomies[1].name}</h3>
      <h3>Popularity: {fullDetails.events[0].popularity}</h3>
      <Link to={fullDetails.events[0].url}>Buy Tickets Here</Link>



{/* <EventChart list={fullDetails.events} /> */}
</div>
  );
};

export default EventDetails;

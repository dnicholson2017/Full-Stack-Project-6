import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      setFullDetails(response);
    };
    callAPI().catch(console.error);
  }, [params.symbol]);

  if (!fullDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{fullDetails.events[0].type}</h1>
{/* <EventChart list={fullDetails.events} /> */}
</div>
  );
};

export default EventDetails;

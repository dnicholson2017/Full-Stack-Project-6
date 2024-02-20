import React from "react"

const VenueCard = (props) => {
    return (
        <div>
            <h2>{props.list.events[0].venue.name}</h2>
        </div>
    )
}

export default VenueCard;
import React from "react"

const CityCard = (props) => {
    return (
        <div>
            <h2>{props.list.events[0].venue.display_location}</h2>
        </div>
    )
}

export default CityCard;
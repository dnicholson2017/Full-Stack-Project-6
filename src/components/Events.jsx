import React from "react"
import "./Events.css"

const Events = (props) => {
    return (
        <div>
            <div className="event-columns">
                <div>
                    <h3>Date</h3>
                    {props.list && 
                        props.list.events.map((event, index) => (
                            <ul key={index}>
                                <li>{event.datetime_local}</li>
                            </ul>
                        ))
                    }
                </div>
                <div>
                    <h3>Performer</h3>
                    {props.list && 
                        props.list.events.map((event, index) => (
                            <ul key={index}>
                                <li>{event.performers[0].name}</li>
                            </ul>
                        ))}
                </div>
                <div className="min-price">
                    <h3>Min Price</h3>
                    {props.list &&
                        props.list.events.map((event, index) => (
                            <ul key={index}>
                                <li>{event.stats.lowest_price}</li>
                            </ul>
                        ))}
                </div>
                <div>
                    <h3>Max Price</h3>
                    {props.list &&
                        props.list.events.map((event, index) => (
                            <ul key={index}>
                                <li>{event.stats.highest_price}</li>
                            </ul>
                        ))}
                </div>
            </div>
            
        </div>
    )
}

export default Events;
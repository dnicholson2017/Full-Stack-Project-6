import React from "react"

const NextEventCard = (props) => {
    //    <img src="" alt="" width={} height={}/>
    return (
        <div>
            <div className="next-event-container">
                <h2>Next Event</h2>
                <img src={props.list.events[0].performers[0].image} width={150} height={100}/>
            </div>
        </div>
    )
}

export default NextEventCard;
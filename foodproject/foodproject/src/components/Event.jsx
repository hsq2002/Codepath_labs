import React from "react";

const Event = (props) => {
    return (
        <div>
            <h5>{props.restaurant}</h5>
            <p>Cuisine: {props.cuisine}</p>
        </div>
    )
}

export default Event;

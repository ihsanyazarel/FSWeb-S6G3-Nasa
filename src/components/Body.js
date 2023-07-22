import React from "react";
import "./Body.css"

const Body = (props) => {
    const {url, title, explanation} = props;
    return (
    <div className="body-container">
        <div className="body-image">
            <img src={url} alt="Resim"></img>
        </div>
        <div className="body-text">
            <h1>{title}</h1>
            <p>{explanation}</p>
        </div>
    </div>
    )
};

export default Body;
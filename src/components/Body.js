import React from "react";

const Body = (props) => {
    const {url, title, explanation} = props;
    return (
    <div>
        <div>
            <img src={url} alt="Resim"></img>
        </div>
        <div>
            <h1>{title}</h1>
            <p>{explanation}</p>
        </div>
    </div>
    )
};

export default Body;
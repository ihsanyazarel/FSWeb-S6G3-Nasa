import React from "react";
import "./Header.css"

const Baslik = ({ date }) => {
    return (
    <div className="header">
        <h1>NASA APOD</h1>
        <h2>Tarih: {date}</h2>
    </div>
    )
};

export default Baslik;
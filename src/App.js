import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import axios from "axios";
import "./App.css"


function App() {
  const [url, setUrl] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [explanation, setExplanation] = useState();

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((res) => {
        setUrl(res.data.url);
        setDate(res.data.date);
        setTitle(res.data.title);
        setExplanation(res.data.explanation);
      });
  }, []);

  return (
    <div className="app">
      <Header date={date} />
      <Body url={url} title={title} explanation={explanation}/>  
      <Footer/>
    </div>
  );
}

export default App;

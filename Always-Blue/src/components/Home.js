import React, { useState } from "react";
import "./Home.css";
import "animate.css";


export default function Home(props) {
  
  return (
    <div className="container">
      <p
        className="text-center  mt-3 "
        style={{
          fontFamily: "Rampart One, cursive",
          fontSize: "9vw",
          color: props.theme === "primary" ? "#0d6efd" : "white",
        }}
      >
        ALWAYS BLUE
      </p>

      <p
        className="text-center animate__animated animate__fadeInUpBig "
        style={{
          fontFamily: "Rampart One, cursive",
          fontSize: "5vw",
          color: props.theme === "primary" ? "#0d6efd" : "white",
        }}
      >
        A web app that aims to<br></br> ease some of your tasks.
      </p>
      {/* <Developer></Developer> */}
    </div>
  );
}

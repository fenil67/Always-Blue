import React from "react";
import "./ABCCommunity.css";
import "animate.css";

export default function ABCCommunity(props) {
  return (
    <div className="container">
      <p
        className="text-center  mt-3 "
        style={{
          fontFamily: "Rampart One, cursive",
          fontSize: "5vw",
          color: props.theme === "primary" ? "#0d6efd" : "white",
        }}
      >
        ALWAYS BLUE <br></br>
        <span style={{ color: "#FF7F00" }}>C</span>
        <span style={{ color: "#FFD700" }}>O</span>
        <span style={{ color: "#2E8B57" }}>N</span>
        <span style={{ color: "#FF33B5" }}>T</span>
        <span style={{ color: "#FF6347" }}>R</span>
        <span style={{ color: "#9400D3" }}>I</span>
        <span style={{ color: "#FF00FF" }}>B</span>
        <span style={{ color: "#0d6efd" }}>U</span>
        <span style={{ color: "#00FF00 " }}>T</span>
        <span style={{ color: "#FF8C00" }}>O</span>
        <span style={{ color: "#DAA520 " }}>R</span>
        <span style={{ color: " #FF0000" }}>S</span> COMMUNITY
      </p>

      <p
        className="text-center animate__animated animate__fadeIn "
        style={{
          fontFamily: "Rampart One, cursive",
          fontSize: "2vw",
          color: props.theme === "primary" ? "#0d6efd" : "white",
        }}
      >
        A place where each and every effort of yours is counted. <br></br>Let's
        make ABC² like
      </p>
      <p
        className="text-center animate__animated animate__fadeIn "
        style={{
          fontFamily: "Rampart One, cursive",
          fontSize: "4vw",
          color: props.theme === "primary" ? "#0d6efd" : "white",
        }}
      >
        " 127.0.0.1 - localhost - dev's home "
      </p>

      <div className="join-button text-center">
        {/* join now button */}
        <button
          type="button"
          className={`btn btn-lg btn-success mt-3 me-3 bubbly-button animate__animated animate__fadeIn`}
        >
          Join Now{" "}🚀 
         
        </button>
      </div>

    </div>
  );
}

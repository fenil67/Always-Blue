import React, { useState } from "react";

export default function About(props) {
  // this is a object that holds the style for taccordians
  let accordionBodyStyle = {
    backgroundColor: props.theme === "primary" ? "white" : "rgb(171, 176, 184)",
    borderColor: props.theme === "primary" ? "#0d6efd" : "white",
  };

  return (
    <div className="container mt-1 ">
      <p
        className="text-center fs-1 mt-1"
        style={{
          fontFamily: "Rampart One, cursive",
          color: props.theme === "primary" ? "#0d6efd" : "white",
        }}
      >
        About Us
      </p>
      <div className="accordion " id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button collapsed text-light bg-${props.theme}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h5>What is AlwaysBlue❓</h5>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={accordionBodyStyle}
          >
            <div className="accordion-body">
              AlwaysBlue is a basic web app that is developed using the{" "}
              <strong>MERN</strong> stack. With features like 15+ Text-based
              utility functions, QR Code Generator, Comments Remover etc, I am
              adding new functionalities every week. Talking about the name,
              being a die hard fan of Silicon Valley series, I call this
              AlwaysBlue. A contradiction is set when you switch to Dark Mode 😜
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button collapsed text-light bg-${props.theme}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h5>Why use AlwaysBlue❓</h5>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={accordionBodyStyle}
          >
            <div className="accordion-body">
              <p>
                <h6>
                  <strong>😀 Easy to Use:</strong>
                </h6>{" "}
                Neither the usage of complex functions nor the language makes
                AlwaysBlue a super easy-to-use web app.
              </p>
              <p>
                <h6>
                  <strong>🔐 Privacy Guaranteed:</strong>
                </h6>{" "}
                Texts added here are secured via a 256-bit encrypted SSL
                connection and deleted automatically as you leave AlwaysBlue.
              </p>
              <p>
                <h6>
                  <strong>♾️ No Registration:</strong>
                </h6>{" "}
                We understand your needs. Who loves to Sign-up or Login to use a
                utility app? probably no one and so there is no registration
                required. A simple process: Visit, Use and Repeat.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button collapsed text-light bg-${props.theme}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h5>Ready to join AB Contributors Community (ABC²)❓</h5>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={accordionBodyStyle}
          >
            <div className="accordion-body">
              ABC² is a place where each and every effort of yours is counted. A
              community for and by the coders. Everyone is building something,
              but we fail to appreciate the efforts made by beginners. Let's
              make this place like{" "}
              <strong>
                <i>"127.0.0.1"</i>
              </strong>{" "}
              (iykyk) and then we all will proudly say{" "}
              <strong>
                <i>"There's no place like ABC²"</i>
              </strong>
              . Join the AlwaysBlue Contributors Community to learn, share, and
              show your skills. Well, to do so, you must first Sign-up or Login.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Textarea(props) {
  // OnChange is used to make a user change the text as it tracks the changes
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // function to handle uppercase
  const handleUppercase = () => {
    let uppercaseText = text.toUpperCase();
    document.getElementById("displayText").innerHTML = uppercaseText;
  };

  // function to handle lowercase
  const handleLowercase = () => {
    let lowercaseText = text.toLowerCase();
    document.getElementById("displayText").innerHTML = lowercaseText;
  };

  // function to handle punctuation removal
  const handlePunctuation = () => {
    let punctuationFree = text.replace(/[^\w\s\']|_/g, "");
    punctuationFree = punctuationFree.replace(/\s+/g, " ");
    document.getElementById("displayText").innerHTML = punctuationFree;
  };

  // function to handle extra spaces
  const handleRemoveSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    document.getElementById("displayText").innerHTML = newText;
  };

  // function to copy text
  function handleCopyText() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(
      document.getElementById("displayText").innerHTML
    ); //used navigator api
    props.showAlert("Text Copied to Clipboard !");
  }

  // function to extract emails
  const handleEmailExtraction = () => {
    let extractEmail = text.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
    );
    document.getElementById("displayText").innerHTML = extractEmail.toString();
  };

  // function to handle text read
  const handleReadText = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  // function to download text in text area
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("displayText").innerHTML], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "alwaysblue.txt";
    element.click();
  };

  // this is a object that holds the style for two textarea
  let textareaStyle = {
    backgroundColor: props.theme === "primary" ? "white" : "#212529",
    color: props.theme === "primary" ? "black" : "white",
    borderWidth: 3,
    borderColor: props.theme === "primary" ? "#0d6efd" : "white",
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container mt-1">
        <p
          className="text-center fs-1 mb-0"
          style={{
            fontFamily: "Rampart One, cursive",
            color: props.theme === "primary" ? "#0d6efd" : "white",
          }}
        >
          Text Utilities
        </p>
        <div className="modal-body row">
          {/* left textarea */}
          <div className="col-md-6">
            <div>
              {/* textarea to add code with comments */}
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                placeholder="Start typing, or copy & paste your text here...."
                value={text}
                onChange={handleOnChange}
                style={textareaStyle}
              ></textarea>
            </div>
            <div className="utility-buttons">
              {/* buttons to convert text to lower and upper case*/}
              <div className="btn-group me-3">
                <button
                  disabled={text.length === 0}
                  className={`btn btn-${props.theme} mt-3`}
                  type="button"
                >
                  Case Conversion
                </button>
                <button
                  disabled={text.length === 0}
                  type="button"
                  className={`btn  btn-${props.theme} mt-3 dropdown-toggle dropdown-toggle-split`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden"></span>
                </button>
                <ul className="dropdown-menu " style={{ cursor: "pointer" }}>
                  <li>
                    <a className="dropdown-item" onClick={handleLowercase}>
                      To Lowercase
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={handleUppercase}>
                      To Uppercase
                    </a>
                  </li>
                </ul>
              </div>

              {/* button to read all text */}
              <button
                disabled={text.length === 0}
                type="button"
                className={`btn btn-${props.theme} mt-3 me-3`}
                onClick={handleReadText}
              >
                Read Text{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="21"
                  fill="currentColor"
                  className="bi bi-megaphone"
                  viewBox="0 0 16 16"
                >
                  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z" />
                </svg>
              </button>

              {/* button to clear all text */}
              <button
                disabled={text.length === 0}
                type="button"
                className={`btn btn-${props.theme} mt-3 me-3`}
                onClick={handleEmailExtraction}
              >
                Extract Emails{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="21"
                  fill="currentColor"
                  className="bi bi-envelope-at"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
              </button>

              {/* button to remove punctuation marks */}
              <button
                disabled={text.length === 0}
                type="button"
                className={`btn btn-${props.theme} mt-3 me-3`}
                onClick={handlePunctuation}
              >
                Remove Punctuation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="21"
                  fill="currentColor"
                  className="bi bi-braces"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z" />
                </svg>
              </button>

              {/* button to remove extra spaces  */}
              <button
                disabled={text.length === 0}
                type="button"
                className={`btn btn-${props.theme} mt-3 me-3`}
                onClick={handleRemoveSpaces}
              >
                Remove Extra Spaces{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="21"
                  fill="currentColor"
                  className="bi bi-displayport"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V8h10v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5h-11Z" />
                  <path d="M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 1h14v4H2.618L1 9.191V6Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* right textarea */}
          <div className="col-md-6">
            <div>
              {/* textarea to display code without comments */}
              <textarea
                className="form-control"
                id="displayText"
                rows="8"
                placeholder="Your output text will be displayed here...."
                style={textareaStyle}
              ></textarea>
            </div>

            <div className="utility-buttons text-center">
              {/* button to download text */}
              <button
                disabled={text.length === 0}
                type="button"
                className={`btn btn-success mt-3 me-3`}
                onClick={downloadTxtFile}
              >
                Download File{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="21"
                  fill="currentColor"
                  className="bi bi-file-earmark-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
              </button>

              {/* button to copy text */}
              <button
                disabled={text.length === 0}
                type="button"
                className={`btn btn-success mt-3 me-3`}
                onClick={handleCopyText}
              >
                Copy Text{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="21"
                  fill="currentColor"
                  className="bi bi-clipboard-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="container mt-3 text-center">
            <p
              className="text-center fs-5"
              style={{
                fontFamily: "Rampart One, cursive",
                color: props.theme === "primary" ? "#0d6efd" : "white",
              }}
            >
              YOUR TEXT SUMMARY
            </p>

            <div className="">
              <button
                disabled={text.length === 0}
                type="button"
                className={`btn btn-${props.theme} position-relative`}
              >
                Total Words
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {/* text.split(" ") returns an array. If there is any element whose length is 0, then it will not be added in the array. This is done using the filter function that calculates length of elements in the array and returns either true/false */}
                  {
                    text.split(/\s+/).filter((element) => {
                      return element.length !== 0;
                    }).length
                  }
                  <span className="visually-hidden"></span>
                </span>
              </button>
              <button
                disabled={text.length === 0}
                type="button"
                className={`btn btn-${props.theme} position-relative ms-4`}
              >
                Total Characters
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {text.length}
                  <span className="visually-hidden"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";

export default function CommentsRemover(props) {
  // OnChange is used to make a user change the text as it tracks the changes
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // function to copy text
  function handleCopyText() {
    let copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();

    // Copy the code inside the text field
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied to Clipboard !");
  }
  // function to remove comments
  function handleCommentsRemoval() {
    let commentsRemove = text.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, "");
    document.getElementById("displayCode").innerHTML = commentsRemove.trim();
  }

  // function to download code in text area
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "alwaysblue.txt";
    element.click();
  };

  // this is a object that holds the style for heading elements
  let headingStyle = {
    fontFamily: "Rampart One, cursive",
    color: props.theme === "primary" ? "#0d6efd" : "white",
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
    <div className="container mt-1">
      <p className="text-center fs-1 mb-0 " style={headingStyle}>
        Comments Remover
      </p>
      <p className="text-center" style={headingStyle}>
        ( Supported Comments: /*...*/ & // ){" "}
      </p>

      <div className="modal-body row">
        {/* left textarea */}
        <div className="col-md-6">
          <div>
            {/* textarea to add code with comments */}
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="12"
              placeholder="Start typing, or copy & paste your code here..."
              value={text}
              onChange={handleOnChange}
              style={textareaStyle}
            ></textarea>
            <div className="text-center mb-3">
              {/* button to remove comments code */}
              <button
                type="button"
                className={`btn btn-${props.theme} mt-3 me-3`}
                onClick={handleCommentsRemoval}
              >
                Remove Comments{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="21"
                  fill="currentColor"
                  className="bi bi-braces-asterisk"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z"
                  />
                </svg>
              </button>

              {/* button to copy code */}
              <button
                type="button"
                className={`btn btn-${props.theme} mt-3 me-3`}
                onClick={handleCopyText}
              >
                Copy Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="21"
                  fill="currentColor"
                  className="bi bi-code-slash"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* right textarea */}
        <div className="col-md-6">
          <div>
            {/* textarea to display code without comments */}
            <textarea
              className="form-control"
              id="displayCode"
              rows="12"
              // onChange={handleOnChange}
              placeholder="Here is your code without comments..."
              style={textareaStyle}
            ></textarea>
          </div>
          <div className="text-center mb-3">
            {/* button to copy code */}
            <button
              type="button"
              className={`btn btn-success mt-3 me-3`}
              onClick={handleCopyText}
            >
              Copy Code
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="21"
                fill="currentColor"
                className="bi bi-code-slash"
                viewBox="0 0 16 16"
              >
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
              </svg>
            </button>

            {/* button to download code */}
            <button
              type="button"
              className={`btn btn-success mt-3`}
              onClick={downloadTxtFile}
            >
              Download File
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
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
// import QRCode from "react-qr-code";
import { QRCode } from "react-qrcode-logo";

export default function CodeGenerator(props) {
  const [value, setValue] = useState();
  const [back, setBack] = useState("#FFFFFF");
  const [fore, setFore] = useState("#000000");
  const [size, setSize] = useState(220);

  // function to download qr-code
  const downloadQR = () => {
    const canvas = document.getElementById("qr-code");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "always-blue-qr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // this is a object that holds the style for label elements
  let labelStyle = {
    fontFamily: "Lato, sans-serif",

    color: props.theme === "primary" ? "#0d6efd" : "white",
  };

  // this is a object that holds the style for input elements
  let inputStyle = {
    backgroundColor: props.theme === "primary" ? "white" : "#212529",
    color: props.theme === "primary" ? "black" : "white",
    borderWidth: 2,
    borderColor: props.theme === "primary" ? "#0d6efd" : "white",
  };

  // this is a object that holds the style for heading elements
  let headingStyle={
    fontFamily: "Rampart One, cursive",
    color: props.theme === "primary" ? "#0d6efd" : "white",

  }

  return (
    <>
      <div className="container mt-1">
        <p
          className="text-center fs-1 mt-1"
          style={headingStyle}
        >
          QR Code Generator
        </p>
        <div
          className="text-center fs-5"
          style={headingStyle}
        >
          Customise your QR Code from a range of{" "}
          <span style={{ color: " #FF0000" }}>1</span>
          <span style={{ color: "#FF7F00" }}>5</span>
          <span style={{ color: "#FFD700" }}>0</span>
          <span style={{ color: "#2E8B57" }}>+</span>
          <span style={{ color: "#0000FF" }}> </span>
          <span style={{ color: "#FF6347" }}>c</span>
          <span style={{ color: "#9400D3" }}>o</span>
          <span style={{ color: "#FF00FF" }}>l</span>
          <span style={{ color: "#0d6efd" }}>o</span>
          <span style={{ color: "#00FF00 " }}>u</span>
          <span style={{ color: "#FF8C00" }}>r</span>
          <span style={{ color: "#DAA520 " }}>s</span>
        </div>
        <div className="qr-code mt-2">
          {/* To divide the page into two columns */}
          <div className="modal-body row">
            {/* left side column to get QR Code details */}
            <div className="col-md-6">
              <form>
                {/* text field to take link or qr code value */}
                <label
                  htmlFor="exampleURL"
                  className="form-label fs-6"
                  style={labelStyle}
                >
                  Enter Data or URL 🔗
                </label>

                <input
                  className="form-control width-50"
                  type="text"
                  placeholder="e.g: https://www.linkedin.com/in/pfenil/"
                  aria-label=".form-control-lg example"
                  onChange={(e) => setValue(e.target.value)}
                  style={inputStyle}
                />

                {/* text field to take background color */}
                <label
                  htmlFor="bgColour"
                  className="form-label fs-6 mt-3"
                  style={labelStyle}
                >
                  Background Colour 🎨
                </label>

                <input
                  className="form-control width-50"
                  type="text"
                  placeholder="e.g: white, blue, green, brown, etc"
                  aria-label=".form-control-lg example"
                  onChange={(e) => setBack(e.target.value)} //a function that helps tracking the changes
                  style={inputStyle}
                />

                {/* text field to take foreground color */}
                <label
                  htmlFor="ForegroundColour"
                  className="form-label fs-6 mt-3"
                  style={labelStyle}
                >
                  Foreground Colour 🎨
                </label>

                <input
                  className="form-control width-50"
                  type="text"
                  placeholder="e.g: white, blue, green, brown, etc"
                  aria-label=".form-control-lg example"
                  onChange={(e) => setFore(e.target.value)}
                  style={inputStyle}
                />

                {/* text field to adjust size of qr code*/}
                <label
                  htmlFor="qrSize"
                  className="form-label fs-6 mt-3"
                  style={labelStyle}
                >
                  Size of QR Code 📏
                </label>

                <input
                  className="form-control width-50 mb-4"
                  type="number"
                  placeholder="e.g: 80, 158, 172, 220, etc"
                  aria-label=".form-control-lg example"
                  onChange={(e) =>
                    setSize(
                      parseInt(e.target.value === "" ? 0 : e.target.value, 10)
                    )
                  }
                  style={inputStyle}
                />
              </form>
            </div>

            {/* right side column to display QR Code */}
            <div className="col-md-6 text-center ">
              <div
                className="fs-6 "
                style={headingStyle}
              >
                Your QR Code will be displayed here...
              </div>

              <div className="qr-code-display mt-3">
                <div>
                  {value && (
                    <QRCode
                      id="qr-code"
                      qrStyle="dots"
                      value={value}
                      bgColor={back}
                      fgColor={fore}
                      size={size === "" ? 0 : size}
                      logoImage="favicon.png"
                      eyeRadius={[
                        [10, 10, 0, 10], // top/left eye
                        [10, 10, 10, 0], // top/right eye
                        [10, 0, 10, 10], // bottom/left
                      ]}
                      logoHeight="55"
                      logoWidth="55"
                    />
                  )}
                </div>
                {/* button to download QR Code */}
                <div className="mb-4">
                  {value && (
                    <button
                      type="button"
                      className={`btn btn-success mt-3`}
                      onClick={downloadQR}
                    >
                      Download QR Code{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="21"
                        fill="currentColor"
                        className="bi bi-qr-code"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2h2v2H2V2Z" />
                        <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
                        <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
                        <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
                        <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

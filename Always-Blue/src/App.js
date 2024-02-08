import { useState } from "react";
import "./App";
import Home from "./components/Home";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import CodeGenerator from "./components/CodeGenerator";
import CommentsRemover from "./components/CommentsRemover";
import CodeDiffChecker from "./components/CodeDiffChecker";
import ABCCommunity from "./components/ABCCommunity";



import About from "./components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";


function App() {
  // state hook to handle theme
  const [theme, setTheme] = useState("primary");

  const handleTheme = () => {
    if (theme === "primary") {
      setTheme("dark");
      document.body.style.backgroundColor = "#464d54";
    } else {
      setTheme("primary");
      document.body.style.backgroundColor = "white";
    }
  };

  //state hook to handle alerts and set timeout
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="ALWAYSBLUE"
          theme={theme}
          handleTheme={handleTheme}
        ></Navbar>
        <Alert alert={alert}></Alert>
        <Routes>
          <Route path="/" element={<Home theme={theme}></Home>}></Route>
          <Route
            path="/text-utilities"
            element={<Textarea theme={theme} showAlert={showAlert}></Textarea>}
          ></Route>
          <Route
            path="/qr-code-generator"
            element={
              <CodeGenerator
                theme={theme}
               
              ></CodeGenerator>
            }
          ></Route>
          <Route
            path="/comments-remover"
            element={
              <CommentsRemover
                theme={theme}
                showAlert={showAlert}
                
              ></CommentsRemover>
            }
          ></Route>

          <Route
            path="/code-differencing-tool"
            element={
              <CodeDiffChecker
                theme={theme}
              
              ></CodeDiffChecker>
            }
          ></Route>

          <Route
            path="/abc-community"
            element={
              <ABCCommunity
                theme={theme}
              
              ></ABCCommunity>
            }
          ></Route>
          <Route path="/about" element={<About theme={theme}></About>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;

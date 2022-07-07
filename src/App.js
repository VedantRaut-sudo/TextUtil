import  { useState } from "react";
import React from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// router import
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); // whether dark mmode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert(" Dark mode has been enable", "success");
      document.title = "TextUtil - DarkMode";
      setInterval(() => {
        document.title = "TextUtil - is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtil (Install It now)";
      }, 1500);
    } else {
      setMode("light");
      showAlert(" Light mode has been enable", "success");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtil - LightMode";
    }
  };
  return (
    // this is JSX ( html wrap inside js)
    //jsx  <> fragment
    <>
      {/* <Navbar /> */}
      {/* <Router> */}
        <Navbar title="textUtil@" about="about textUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          {/* paste switch from website */}
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}
            {/* <Route  exact path="/"> */}
            <TextForm />
             {/* </Route>
            <About />
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

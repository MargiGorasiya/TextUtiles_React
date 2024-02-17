import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./Components/About";

function App() {
  const [mode, setmode] = useState("Dark");
  const [alert, setalert] = useState(null);
  const [Text, setText] = useState("Enable Dark Mode");

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#112227";
      showalert("Dark mode has been enabled", "success");
      setText("Enable Light Mode");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
      setText("Enable Dark Mode");
    }
  };
  return (
    <>
      <div className="App">
        <Navbar
          title="TextUtilies1"
          mode={mode}
          togglemode={togglemode}
          Text={Text}
        />
        <Alert alert={alert} />
        <TextForm
          showalert={showalert}
          heading="Enter The Text To Analaze Below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;

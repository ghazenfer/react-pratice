import React, { useState } from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import About from "./component/About"; // Import About component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alertState, setAlertState] = useState(null);

  const showAlert = (message, type) => {
    setAlertState({ msg: message, type: type });

    // Automatically remove alert after 3 seconds
    setTimeout(() => {
      setAlertState(null);
    }, 3000);
  };

  // Function to toggle dark mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "danger");
    }
  };

  return (
    <Router>
      <Navbar title="Mr-Ghazenfer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alertState} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About/>}  /> 
          <Route path="/" element={<TextForm heading="Enter your text" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

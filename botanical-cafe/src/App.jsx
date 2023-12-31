import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="mainbody" id="top">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/" />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

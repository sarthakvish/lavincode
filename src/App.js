import './App.css';
import {Footer} from "./Components/Footer";
import "../src/assets/css/style.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import * as React from "react";

function App() {
  return (
    <div className="App">
        <h1>hellllllllllll</h1>
        <Routes>
            <Route path="/Home" element={<h1>megha</h1>}/>
            <Route path="/Home" element={<h1>megha</h1>}/>
            <Route path="/Home" element={<h1>megha</h1>}/>
            <Route path="/Home" element={<h1>megha</h1>}/>


        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

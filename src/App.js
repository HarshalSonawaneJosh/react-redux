import React from "react";
import Home from "./components/home";
import Forms from "./components/forms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateDetails from "./components/updateDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/edit/:id" element={<UpdateDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

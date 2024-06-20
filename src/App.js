import React from "react";
import Nabvar from "./components/Navbar/Nabvar";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./components/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Portafolio } from "./components/Portafolio/Portafolio";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nabvar />
        <div className="pageContainer">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/projects" element={<Portafolio />} />
            {/* <Route path='/projects/:projectId' element={<Portafolio/>}/> */}
          </Routes>
          {/* <Header/> */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

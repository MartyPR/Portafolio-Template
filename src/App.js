import React from "react";
import Nabvar from "./components/Navbar/Nabvar";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./components/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Portafolio } from "./components/Portafolio/Portafolio";
import Error_404 from "./components/404/404";


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
            <Route path="*" element={<Error_404/>}/>


          </Routes>
          {/* <Header/> */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

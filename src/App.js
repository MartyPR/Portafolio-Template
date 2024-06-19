
import React from 'react';
import Nabvar from './components/Navbar/Nabvar';
import Header from './components/Header/Header';
import { ThemeProvider } from './components/ThemeContext';


function App() {
  return (
    
    
      <ThemeProvider>
       <Nabvar/>
       <div className='pageContainer'>
       <Header/>

       </div>
       
       </ThemeProvider>
      
   
  );
}

export default App;

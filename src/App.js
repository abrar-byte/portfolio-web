import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';



const App = () => {
  return (
     <BrowserRouter>
         <Routes>
         <Route exact path="/" element={<Home />} />
         {/* <Route path="/projects/:name" element={<Projects />} /> */}

         </Routes>
     </BrowserRouter>
  );
};

export default App;

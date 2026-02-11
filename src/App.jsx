// import React, { useState, useEffect } from 'react';
// import Home from './Home';
// import { Menu, X } from 'lucide-react';
// import Retail from "./pages/industrial/Retails"



// function App() {
//   return (
//     <div className="App">
      
//       <Home />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header'; // Aapka header code yahan move kar dein
import Home from './Home';
import Retail from "./pages/industrial/Retails";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar ko Routes ke bahar rakha hai taaki ye har page par dikhe */}
        <Navbar /> 

        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />
          
          {/* Industrial -> Retail Page Route */}
          <Route path="/industrial/retail" element={<Retail />} />
          
          {/* Aap baaki pages ke routes bhi yahan add kar sakte hain */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
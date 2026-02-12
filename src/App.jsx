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
import Retail from './pages/industrial/Retails';

import LifeSciences from './pages/industrial/LifeSciences';
import CPG from './pages/industrial/CPG';
import BFSI from './pages/industrial/BFSI';
import Telcomedia from './pages/industrial/Telcomedia';
import TravelHospitality from './pages/industrial/TravelHospitality';
import Industrials from './pages/industrial/Industrials';
import Healthcare from './pages/industrial/Healthcare';

// Insights Pages
import CaseStudies from './pages/Insights/CaseStudies';
import ThoughtLeadership from './pages/Insights/ThoughtLeadership';
import DataAIPlaybooks from './pages/Insights/DataAIPlaybooks';
import CustomerVoice from './pages/Insights/CustomerVoice';


// Services Pages
import DataEngineering from './pages/Services/DataEngineering';
import DataModernization from './pages/Services/DataModernization';
import DigitalEngineering from './pages/Services/DigitalEngineering';
import LLMOps from './pages/Services/LLMOps';
import LifeAtSigma from './pages/Services/LifeAtSigma';


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
          <Route path="/industrial/healthcare" element={<Healthcare />} />
          <Route path="/industrial/life-sciences" element={<LifeSciences />} />
          <Route path="/industrial/cpg" element={<CPG />} />
          <Route path="/industrial/financial-services" element={<BFSI />} />
          <Route path="/industrial/telco-media" element={<Telcomedia />} />
          <Route
            path="/industrial/travel-hospitality"
            element={<TravelHospitality />}
          />
          <Route path="/industrial/industrials" element={<Industrials />} />

          {/* Insights Pages Routes */}
          <Route path="/insights/case-studies" element={<CaseStudies />} />
          <Route
            path="/insights/thought-leadership"
            element={<ThoughtLeadership />}
          />
          <Route
            path="/insights/data-ai-playbooks"
            element={<DataAIPlaybooks />}
          />
          <Route path="/insights/customer-voice" element={<CustomerVoice />} />

          {/* Services Pages Routes */}
          <Route
            path="/services/data-engineering"
            element={<DataEngineering />}
          />
          <Route
            path="/services/data-modernization"
            element={<DataModernization />}
          />
          <Route
            path="/services/digital-engineering"
            element={<DigitalEngineering />}
          />
          <Route path="/services/llmops" element={<LLMOps />} />

          {/* Life at Sigma Route */}
          <Route path="/careers" element={<LifeAtSigma />} />

          {/* Aap baaki pages ke routes bhi yahan add kar sakte hain */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

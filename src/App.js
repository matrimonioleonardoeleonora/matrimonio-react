import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import ConfermaPartecipazione from './ConfermaPartecipazione';
import Iban from './Iban';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/conferma" element={<ConfermaPartecipazione />} />
        <Route path='/iban' element={<Iban />} />
      </Routes>
    </Router>
  );
}

export default App;

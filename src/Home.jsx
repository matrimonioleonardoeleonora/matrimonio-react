import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="top-menu">
        <Link to="/">Home</Link>
        <Link to="/menu">Allergie e Intolleranze</Link>
        <Link to="/conferma">Conferma Partecipazione</Link>
        <Link to="/iban">Viaggio di Nozze</Link>
      </div>
    </div>
  );
}

export default Home;

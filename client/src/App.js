import React from 'react';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import LandingPage from './pages/LandingPage';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;

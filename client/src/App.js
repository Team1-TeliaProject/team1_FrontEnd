import React from 'react';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Routes from './Routes';

import './App.scss';

function App() {
  return (
    <div className={window.location.href.includes('welcomepage') ? 'app app--landing' : 'app'}>
      <Navigation />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';

import './App.scss';
import Header from './components/header/Header';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <div className="App">
      <Header name="eCRC" />
      <Body />

      <Footer />
    </div>
  );
}

export default App;

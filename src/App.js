import React from 'react';
import logo from './logo.svg';

import './App.scss';
import Header from './header/Header';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import Body from './body/Body';
import Footer from './footer/Footer';

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

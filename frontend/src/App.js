import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    // BrowserRouter usado para renderizar com react-dom-router, tem que ficar em volta das minhas rotas
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;

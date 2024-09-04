import React from 'react';
import Header from './components/Header';
import Sitios from './components/Sitios';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid rounded-3">
      <Header/>
      <div className="row">
        <Sitios/>
        <div className="col">
          <h5 className='text-center'>EVALUACION DE LOS INDICADORES DE LOGROS</h5>
          <Accordion />
          </div>
      </div>
      <div className="row"><Footer/></div>
      </div>
    </div>
  );
}

export default App;

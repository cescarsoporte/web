import React, { useState } from 'react';
import DiagSec from './DiagSec';
import FormativaSec from './FormativaSec';
import SumativaSec from './SumativaSec';
import OlimpSec from './OlimpSec';
import OlimpDist from './OlimpDist';

const Accordion = () => {
  // Estado para manejar la visibilidad del contenido protegido
  const [isOlimpDistOpen, setIsOlimpDistOpen] = useState(false);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [password, setPassword] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');

  const correctPassword = '6666'; // La contraseña establecida en el código

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (inputPassword === correctPassword) {
      setIsPasswordProtected(true);
      setError('');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const handleAccordionClick = () => {
    if (!isPasswordProtected) {
      setIsOlimpDistOpen(!isOlimpDistOpen);
      setIsPasswordProtected(false);
    }
  };

  return (
    <div id="accordion-1" className="accordion shadow-lg" role="tablist">
      <div className="accordion-item">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion-1 .item-1"
            aria-expanded="true"
            aria-controls="accordion-1 .item-1"
          >
            DIAGNOSTICA
          </button>
        </h2>
        <div
          className="accordion-collapse collapse item-1"
          role="tabpanel"
          data-bs-parent="#accordion-1"
        >
          <div className="accordion-body">
            <DiagSec />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion-1 .item-2"
            aria-expanded="false"
            aria-controls="accordion-1 .item-2"
          >
            FORMATIVA
          </button>
        </h2>
        <div
          className="accordion-collapse collapse item-2"
          role="tabpanel"
          data-bs-parent="#accordion-1"
        >
          <div className="accordion-body">
            <FormativaSec />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion-1 .item-3"
            aria-expanded="false"
            aria-controls="accordion-1 .item-3"
          >
            SUMATIVA
          </button>
        </h2>
        <div
          className="accordion-collapse collapse item-3"
          role="tabpanel"
          data-bs-parent="#accordion-1"
        >
          <div className="accordion-body">
            <SumativaSec />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion-1 .item-4"
            aria-expanded="false"
            aria-controls="accordion-1 .item-4"
          >
            OLIMPIADA INTERNA
          </button>
        </h2>
        <div
          className="accordion-collapse collapse item-4"
          role="tabpanel"
          data-bs-parent="#accordion-1"
        >
                    <div className="accordion-body">
            {isPasswordProtected ? (
              <OlimpSec />
            ) : (
              <form onSubmit={handlePasswordSubmit}>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Ingrese la contraseña:</label>
                  <input
                    type="password"
                    id="passwordInput1"
                    className="form-control"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion-1 .item-5"
            aria-expanded={isOlimpDistOpen}
            aria-controls="accordion-1 .item-5"
            onClick={handleAccordionClick}
          >
            OLIMPIADA DISTRITO EDUCATIVO 1502
          </button>
        </h2>
        <div
          className={`accordion-collapse collapse item-5 ${isOlimpDistOpen ? 'show' : ''}`}
          role="tabpanel"
          data-bs-parent="#accordion-1"
        >
          <div className="accordion-body">
            {isPasswordProtected ? (
              <OlimpDist />
            ) : (
              <form onSubmit={handlePasswordSubmit}>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Ingrese la contraseña:</label>
                  <input
                    type="password"
                    id="passwordInput2"
                    className="form-control"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
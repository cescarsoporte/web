import React, { useState, useRef } from 'react';
import DiagSec from './DiagSec';
import FormativaSec from './FormativaSec';
import SumativaSec from './SumativaSec';
import OlimpSec from './OlimpSec';
import OlimpDist from './OlimpDist';

const correctPassword = '4455'; // La contraseña establecida en el código

const PasswordForm = ({ onSubmit, error, value, onChange, inputRef }) => (
  <form onSubmit={onSubmit}>
    <div className="mb-3">
      <label htmlFor="passwordInput" className="form-label">Ingrese la contraseña:</label>
      <input
        type="password"
		id="passwordInput"
        // id={`passwordInput-${inputRef}`}  // Concatenación dentro de llaves
        className="form-control"
        value={value}
        onChange={onChange}
        ref={inputRef} // Asignamos la referencia al input
      />
    </div>
    {error && <div className="alert alert-danger">{error}</div>}
    <button type="submit" className="btn btn-primary">Enviar</button>
  </form>
);

const Accordion = () => {
  const [activeSection, setActiveSection] = useState(null); // Estado para rastrear la sección activa
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const olimpSecInputRef = useRef(null); // Referencia para el campo de texto de OlimpSec
  const olimpDistInputRef = useRef(null); // Referencia para el campo de texto de OlimpDist

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (inputPassword === correctPassword) {
      setIsPasswordProtected(true);
      setError('');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const handleAccordionClick = (sectionKey) => {
    setActiveSection((prevSection) => (prevSection === sectionKey ? null : sectionKey));
    setTimeout(() => {
      if (sectionKey === 'OlimpSec') {
        olimpSecInputRef.current?.focus();
      } else if (sectionKey === 'OlimpDist') {
        olimpDistInputRef.current?.focus();
      }
    }, 100);
  };

  const sections = [
    {
      title: 'DIAGNOSTICA',
      component: <DiagSec />,
      target: 'item-1',
      sectionKey: 'DiagSec',
    },
    {
      title: 'FORMATIVA',
      component: <FormativaSec />,
      target: 'item-2',
      sectionKey: 'FormativaSec',
    },
    {
      title: 'SUMATIVA',
      component: <SumativaSec />,
      target: 'item-3',
      sectionKey: 'SumativaSec',
    },
    {
      title: 'OLIMPIADA INTERNA',
      component: isPasswordProtected ? <OlimpSec /> : (
        <PasswordForm
          onSubmit={handlePasswordSubmit}
          error={error}
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          inputRef={olimpSecInputRef}
        />
      ),
      target: 'item-4',
      sectionKey: 'OlimpSec',
    },
    {
      title: 'OLIMPIADA DISTRITO EDUCATIVO 1502',
      component: isPasswordProtected ? <OlimpDist /> : (
        <PasswordForm
          onSubmit={handlePasswordSubmit}
          error={error}
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          inputRef={olimpDistInputRef}
        />
      ),
      target: 'item-5',
      sectionKey: 'OlimpDist',
    },
  ];

  return (
    <div id="accordion-1" className="accordion shadow-lg" role="tablist">
      {sections.map((section, index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header" role="tab">
            <button
              className={`accordion-button ${
                activeSection === section.sectionKey ? '' : 'collapsed'
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#accordion-1 .${section.target}`}
              aria-expanded={activeSection === section.sectionKey}
              aria-controls={`accordion-1 .${section.target}`}
              onClick={() => handleAccordionClick(section.sectionKey)}
            >
              {section.title}
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              activeSection === section.sectionKey ? 'show' : ''
            } ${section.target}`}
            role="tabpanel"
            data-bs-parent="#accordion-1"
          >
            <div className="accordion-body">
              {section.component}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

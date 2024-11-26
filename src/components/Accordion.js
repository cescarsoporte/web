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
        className="form-control"
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
    {error && <div className="alert alert-danger">{error}</div>}
    <button type="submit" className="btn btn-primary">Enviar</button>
  </form>
);

const Accordion = () => {
  const [isOlimpDistOpen, setIsOlimpDistOpen] = useState(false);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

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
      inputRef.current.focus();
    }
  };

  const sections = [
    { title: 'DIAGNOSTICA', component: <DiagSec />, target: 'item-1' },
    { title: 'FORMATIVA', component: <FormativaSec />, target: 'item-2' },
    { title: 'SUMATIVA', component: <SumativaSec />, target: 'item-3' },
    {
      title: 'OLIMPIADA INTERNA',
      component: isPasswordProtected ? <OlimpSec /> : (
        <PasswordForm
          onSubmit={handlePasswordSubmit}
          error={error}
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          inputRef={inputRef}
        />
      ),
      target: 'item-4',
      onClick: handleAccordionClick,
	  ariaExpanded: isOlimpDistOpen
    },
    {
      title: 'OLIMPIADA DISTRITO EDUCATIVO 1502',
      component: isPasswordProtected ? <OlimpDist /> : (
        <PasswordForm
          onSubmit={handlePasswordSubmit}
          error={error}
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          inputRef={inputRef}
        />
      ),
      target: 'item-5',
      onClick: handleAccordionClick,
      ariaExpanded: isOlimpDistOpen
    }
  ];

  return (
    <div id="accordion-1" className="accordion shadow-lg" role="tablist">
      {sections.map((section, index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header" role="tab">
            <button
              className={`accordion-button ${section.ariaExpanded ? '' : 'collapsed'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#accordion-1 .${section.target}`}
              aria-expanded={section.ariaExpanded || 'false'}
              aria-controls={`accordion-1 .${section.target}`}
              onClick={section.onClick}
            >
              {section.title}
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${section.ariaExpanded ? 'show' : ''} ${section.target}`}
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

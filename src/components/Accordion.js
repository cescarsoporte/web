import React from 'react';
import DiagSec from './DiagSec';
import OlimpSec from './OlimpSec';
import OlimpDist from './OlimpDist';

const Accordion = () => {
  return (
    <div id="accordion-1" className="accordion shadow-lg" role="tablist">
      <div className="accordion-item">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion-1 .item-1"
            aria-expanded="true"
            aria-controls="accordion-1 .item-1"
          >
            Diagnostica Secundaria
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
            Olimpiada Secundaria
          </button>
        </h2>
        <div
          className="accordion-collapse collapse item-2"
          role="tabpanel"
          data-bs-parent="#accordion-1"
        >
          <div className="accordion-body">
            <OlimpSec />
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
            Olimpiada Distrital 1502
          </button>
        </h2>
        <div
          className="accordion-collapse collapse item-3"
          role="tabpanel"
          data-bs-parent="#accordion-1"
        >
          <div className="accordion-body">
           <OlimpDist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
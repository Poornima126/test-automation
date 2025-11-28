import React from 'react';
import './Stepper.scss';

const Stepper = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Upload' },
    { number: 2, label: 'Compare' },
    { number: 3, label: 'Report' }
  ];

  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <div 
          key={step.number}
          className={`stepper-step ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
        >
          <div className="stepper-circle">{step.number}</div>
          <div className="stepper-label">{step.label}</div>
          {index < steps.length - 1 && <div className="stepper-line"></div>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;

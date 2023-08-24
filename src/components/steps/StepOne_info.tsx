import React from "react";

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep: any;
};

const StepOne_info = ({ currentActiveStep, setCurrentActiveStep }: Props) => {
  return currentActiveStep == 1 ? (
    <div className="multiStepForm__form-info multiStepForm__form-container">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <div className="multiStepForm__form-info-input">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="e.g. Stephen King" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="number">Phone Number</label>
          <input type="tel" placeholder="e.g. 04 32 323 232" id="number" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default StepOne_info;

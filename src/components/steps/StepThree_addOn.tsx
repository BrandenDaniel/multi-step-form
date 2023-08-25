import React from "react";

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep?: any;
};

const StepThree_addOn = ({
  currentActiveStep,
  setCurrentActiveStep,
}: Props) => {
  return currentActiveStep == 3 ? (
    <div className="multiStepForm__form-addOn multiStepForm__form-container">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="multiStepForm__form-addOn-options">
        <label htmlFor="onlineServices">
          <input type="checkbox" id="onlineServices" />
          <div>
            <h2>Online service</h2>
            <p>Access to multiplayer games</p>
          </div>
          <span>+$1/mo</span>
        </label>

        <label htmlFor="largerStorage">
          <input type="checkbox" id="largerStorage" />
          <div>
            <h2>Larger storage</h2>
            <p>Extra 1TB of cloud save</p>
          </div>
          <span>+$2/mo</span>
        </label>

        <label htmlFor="customizableProfile">
          <input type="checkbox" id="customizableProfile" />
          <div>
            <h2>Customizable profile</h2>
            <p>Custom theme on your profile</p>
          </div>
          <span>+$2/mo</span>
        </label>
      </div>
    </div>
  ) : (
    ""
  );
};

export default StepThree_addOn;

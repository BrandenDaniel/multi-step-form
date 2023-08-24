import React, { MouseEvent } from "react";

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep: any;
};

const StepSubmit = ({ currentActiveStep, setCurrentActiveStep }: Props) => {
  const goNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentActiveStep(currentActiveStep + 1);
  };

  return (
    <div className="multiStepForm__form-submit">
      <button
        className={`multiStepForm__form-submit-back ${
          currentActiveStep == 1 ? "multiStepForm__form-submit-hide" : ""
        }`}
      >
        Go Back
      </button>
      <button className="multiStepForm__form-submit-next" onClick={goNext}>
        Next Step
      </button>
    </div>
  );
};

export default StepSubmit;

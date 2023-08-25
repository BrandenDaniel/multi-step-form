import React, { MouseEvent } from "react";

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep?: any;
  validation?: any;
  stepValidation?: any;
};

const StepSubmit = ({
  currentActiveStep,
  setCurrentActiveStep,
  validation,
  stepValidation,
}: Props) => {
  const goNext = (e: React.MouseEvent) => {
    e.preventDefault();
    stepValidation && stepValidation();
    validation ? setCurrentActiveStep(currentActiveStep + 1) : "";
  };

  const goBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentActiveStep(currentActiveStep - 1);
  };

  return (
    <div className="multiStepForm__form-submit">
      <button
        className={`multiStepForm__form-submit-back ${
          currentActiveStep == 1 ? "multiStepForm__form-submit-hide" : ""
        }`}
        onClick={goBack}
      >
        Go Back
      </button>
      <button
        className="multiStepForm__form-submit-next"
        type="submit"
        onClick={goNext}
      >
        Next Step
      </button>
    </div>
  );
};

export default StepSubmit;

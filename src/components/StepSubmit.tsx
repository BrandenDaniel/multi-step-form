import React, { MouseEvent } from "react";

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep?: any;
  validation?: any;
  stepValidation?: any;
  calculatePrice?: any;
};

const StepSubmit = (props: Props) => {
  const goNext = (e: React.MouseEvent) => {
    e.preventDefault();
    props.stepValidation && props.stepValidation();
    props.calculatePrice && props.calculatePrice();
    props.validation && props.setCurrentActiveStep(props.currentActiveStep + 1);
  };

  const goBack = (e: React.MouseEvent) => {
    e.preventDefault();
    props.setCurrentActiveStep(props.currentActiveStep - 1);
  };

  return (
    <div
      className={`multiStepForm__form-submit ${
        props.currentActiveStep == 1
          ? "multiStepForm__form-submit--hide-back"
          : ""
      }`}
    >
      {props.currentActiveStep != 1 ? (
        <button className="multiStepForm__form-submit-back" onClick={goBack}>
          Go Back
        </button>
      ) : (
        ""
      )}
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

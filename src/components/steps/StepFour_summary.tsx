import React from "react";

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep?: any;
};

const StepFour_summary = ({
  currentActiveStep,
  setCurrentActiveStep,
}: Props) => {
  return currentActiveStep == 4 ? (
    <div className="multiStepForm__form-summary multiStepForm__form-container">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="multiStepForm__form-summary-detail">
        <div className="multiStepForm__form-summary-detail-item multiStepForm__form-summary-detail-item--header">
          <div>
            <span>Arcade (Yearly)</span>
            <button>Change</button>
          </div>
          <p>$90/yr</p>
        </div>

        <div className="multiStepForm__form-summary-detail-item">
          <span>Online service</span>
          <p>+$10/yr</p>
        </div>

        <div className="multiStepForm__form-summary-detail-item">
          <span>Larger storage</span>
          <p>+$20/yr</p>
        </div>
      </div>

      <div className="multiStepForm__form-summary-total">
        <span>Total (per year)</span>
        <p>$120/yr</p>
      </div>
    </div>
  ) : (
    ""
  );
};

export default StepFour_summary;

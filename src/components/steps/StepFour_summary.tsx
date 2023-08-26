"use client";

import React, { MouseEvent, useState } from "react";

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep?: any;
  plan: string;
  planType: string;
  mainPrice: number;
};

const StepFour_summary = (props: Props) => {
  const handlePlanChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setCurrentActiveStep(2);
  };

  return (
    props.currentActiveStep == 4 && (
      <div className="multiStepForm__form-summary multiStepForm__form-container">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

        <div className="multiStepForm__form-summary-detail">
          <div className="multiStepForm__form-summary-detail-item multiStepForm__form-summary-detail-item--header">
            <div>
              <span>
                {props.plan} (
                {props.planType == "Monthly" ? "Monthly" : "Yearly"})
              </span>
              <button onClick={handlePlanChange}>Change</button>
            </div>
            <p>
              ${props.mainPrice}/{props.planType == "Monthly" ? "mo" : "yr"}
            </p>
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
    )
  );
};

export default StepFour_summary;

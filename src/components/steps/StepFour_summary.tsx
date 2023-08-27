"use client";

import React, { MouseEvent, useState } from "react";

type SelectedOption = {
  title: string;
  subtitle: string;
  id: string;
  subscribed: boolean;
  price: number;
};

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep?: any;
  plan: string;
  planType: string;
  mainPrice: number;
  selectedOptions: SelectedOption[];
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

          {props.selectedOptions.map((item) =>
            item.subscribed ? (
              <div className="multiStepForm__form-summary-detail-item">
                <span>{item.title}</span>
                <p>
                  +${item.price}/{props.planType == "Monthly" ? "mo" : "yr"}
                </p>
              </div>
            ) : null
          )}
        </div>

        <div className="multiStepForm__form-summary-total">
          <span>
            Total ({props.planType == "Monthly" ? "per month" : "per year"})
          </span>
          <p>$120/yr</p>
        </div>
      </div>
    )
  );
};

export default StepFour_summary;

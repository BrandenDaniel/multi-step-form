"use client";

import React, { MouseEvent, useState } from "react";
import StepSubmit from "../StepSubmit";

type SelectedOption = {
  title: string;
  subtitle: string;
  id: string;
  subscribed: boolean;
  price: number;
};

type Input = {
  name: string;
  type: string;
  placeholder: string;
  id: string;
  label: string;
  required: boolean;
  focused: string;
  value: string;
  valid: boolean;
  errorMessage?: string;
};

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep?: any;
  plan: string;
  planType: string;
  planTypeAlias: string;
  multiplier: number;
  mainPrice: number;
  secondaryPrice: number;
  selectedOptions: SelectedOption[];
  validation: any;
  inputs: Input[];
};

const StepFour_summary = (props: Props) => {
  const handlePlanChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setCurrentActiveStep(2);
  };

  const handleOptionChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setCurrentActiveStep(3);
  };

  const handleInputChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setCurrentActiveStep(1);
  };

  return (
    props.currentActiveStep == 4 && (
      <>
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
                ${props.mainPrice}/{props.planTypeAlias}
              </p>
            </div>

            {props.selectedOptions.map((item) =>
              item.subscribed ? (
                <div className="multiStepForm__form-summary-detail-item multiStepForm__form-summary-detail-item--addon">
                  <span>{item.title}</span>
                  <p>
                    +${item.price * props.multiplier}/{props.planTypeAlias}
                  </p>
                </div>
              ) : null
            )}

            <div className="multiStepForm__form-summary-detail-item multiStepForm__form-summary-detail-item--addon-change">
              <button onClick={handleOptionChange}>Change</button>
            </div>

            {props.inputs.map((item) => (
              <div className="multiStepForm__form-summary-detail-item multiStepForm__form-summary-detail-item--user">
                <span>{item.label}</span>
                <p>{item.value}</p>
              </div>
            ))}
            <div className="multiStepForm__form-summary-detail-item">
              <button onClick={handleInputChange}>Change</button>
            </div>
          </div>

          <div className="multiStepForm__form-summary-total">
            <span>
              Total ({props.planType == "Monthly" ? "per month" : "per year"})
            </span>
            <p>
              ${props.mainPrice + props.secondaryPrice}/{props.planTypeAlias}
            </p>
          </div>
        </div>
        <StepSubmit
          currentActiveStep={props.currentActiveStep}
          setCurrentActiveStep={props.setCurrentActiveStep}
          validation={props.validation.stepFour}
        />
      </>
    )
  );
};

export default StepFour_summary;

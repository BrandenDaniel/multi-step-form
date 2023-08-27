"use client";

import React, { useState } from "react";
import StepSubmit from "../StepSubmit";

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
  setCurrentActiveStep: any;
  validation: any;
  setValidation: any;
  inputs: Input[];
  setInputs: any;
};

const StepOne_info = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = props.inputs.map((input) => {
      if (input.name === e.target.name) {
        return {
          ...input,
          value: e.target.value,
          valid: e.target.checkValidity(),
        };
      }
      return input;
    });

    props.setInputs(newInputValue);

    if (
      newInputValue[0].valid &&
      newInputValue[1].valid &&
      newInputValue[2].valid
    ) {
      props.setValidation({ ...props.validation, stepOne: true });
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const newInputs = props.inputs.map((input) => {
      if (input.name === e.target.name) {
        return { ...input, focused: "true" };
      }
      return input;
    });
    props.setInputs(newInputs);
  };

  const stepOneValidation = () => {
    props.setInputs(
      props.inputs.map((input) => {
        return { ...input, focused: "true" };
      })
    );
  };

  return (
    props.currentActiveStep === 1 && (
      <>
        <div className="multiStepForm__form-info multiStepForm__form-container">
          <h1>Personal info</h1>
          <div className="multiStepForm__form-info-input">
            {props.inputs.map((input) => (
              <div key={input.id}>
                <label htmlFor={input.id}>
                  {input.label}
                  <span className="multiStepForm__form-info-input-validation-msg">
                    {input?.errorMessage
                      ? input.errorMessage
                      : "This field is required"}
                  </span>
                </label>
                <input
                  {...input}
                  value={input.value}
                  onInput={handleChange}
                  onBlur={handleFocus}
                  data-focused={input.focused}
                  autoComplete="off"
                />
              </div>
            ))}
          </div>
        </div>
        <StepSubmit
          currentActiveStep={props.currentActiveStep}
          setCurrentActiveStep={props.setCurrentActiveStep}
          validation={props.validation.stepOne}
          stepValidation={stepOneValidation}
        />
      </>
    )
  );
};

export default StepOne_info;

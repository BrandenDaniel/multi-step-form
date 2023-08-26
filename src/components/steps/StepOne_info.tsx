"use client";

import React, { useState } from "react";
import StepSubmit from "../StepSubmit";

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep: any;
  validation: any;
  setValidation: any;
};

const StepOne_info = ({
  currentActiveStep,
  setCurrentActiveStep,
  validation,
  setValidation,
}: Props) => {
  const [inputs, setInputs] = useState([
    {
      name: "name",
      type: "text",
      placeholder: "e.g. Stephen King",
      id: "name",
      label: "Name",
      required: true,
      focused: "false",
      value: "",
      valid: false,
    },
    {
      name: "email",
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
      id: "email",
      label: "Email Address",
      errorMessage: "Email address must be valid",
      required: true,
      focused: "false",
      value: "",
      valid: false,
    },
    {
      name: "phone",
      type: "number",
      placeholder: "e.g. 04 32 323 232",
      id: "phone",
      label: "Phone Number",
      required: true,
      focused: "false",
      value: "",
      valid: false,
    },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = inputs.map((input) => {
      if (input.name === e.target.name) {
        return {
          ...input,
          value: e.target.value,
          valid: e.target.checkValidity(),
        };
      }
      return input;
    });

    setInputs(newInputValue);

    if (inputs[0].valid && inputs[1].valid && inputs[2].valid) {
      setValidation({ ...validation, stepOne: true });
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const newInputs = inputs.map((input) => {
      if (input.name === e.target.name) {
        return { ...input, focused: "true" };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const stepOneValidation = () => {
    setInputs(
      inputs.map((input) => {
        return { ...input, focused: "true" };
      })
    );
  };

  return (
    currentActiveStep == 1 && (
      <>
        <div className="multiStepForm__form-info multiStepForm__form-container">
          <h1>Personal info</h1>
          <div className="multiStepForm__form-info-input">
            {inputs.map((input) => (
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
                  onChange={handleChange}
                  onBlur={handleFocus}
                  data-focused={input.focused}
                />
              </div>
            ))}
          </div>
        </div>
        <StepSubmit
          currentActiveStep={currentActiveStep}
          setCurrentActiveStep={setCurrentActiveStep}
          validation={validation.stepOne}
          stepValidation={stepOneValidation}
        />
      </>
    )
  );
};

export default StepOne_info;

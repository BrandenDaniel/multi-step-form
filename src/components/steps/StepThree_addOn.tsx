import React, { ChangeEvent, useState } from "react";
import StepSubmit from "../StepSubmit";

type SelectedOption = {
  title: string;
  subtitle: string;
  id: string;
  subscribed: boolean;
  price: number;
};

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep: (step: number) => void;
  validation: any;
  planType: string;
  setMainPrice: any;
  multiplier: number;
  plan: string;
  planTypeAlias: string;
  secondaryPrice: number;
  setSecondaryPrice: any;
  selectedOptions: SelectedOption[];
  setSelectedOptions: any;
};

const StepThree_addOn = (props: Props) => {
  const handleOptionSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const updateOptions = props.selectedOptions.map((option) => {
      if (e.currentTarget.checked && option.id === e.currentTarget.id) {
        return { ...option, subscribed: true };
      } else if (!e.currentTarget.checked && option.id === e.currentTarget.id) {
        return { ...option, subscribed: false };
      }
      return option;
    });

    props.setSelectedOptions(updateOptions);
  };

  const calculatePrice = () => {
    props.setMainPrice(
      props.plan === "Arcade"
        ? 9 * props.multiplier
        : props.plan === "Advanced"
        ? 12 * props.multiplier
        : props.plan === "Pro"
        ? 15 * props.multiplier
        : ""
    );

    props.setSecondaryPrice(0);
    let secondaryPrice = 0;

    props.selectedOptions.forEach((item) => {
      if (item.subscribed) {
        secondaryPrice += item.price;
      }
    });

    props.setSecondaryPrice(secondaryPrice * props.multiplier);
  };

  return (
    props.currentActiveStep == 3 && (
      <>
        <div className="multiStepForm__form-addOn multiStepForm__form-container">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
          <div className="multiStepForm__form-addOn-options">
            {props.selectedOptions.map((item) => (
              <label htmlFor={item.id} key={item.id}>
                <input
                  checked={item.subscribed ? true : false}
                  type="checkbox"
                  id={item.id}
                  onChange={(e) => handleOptionSelect(e)}
                />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.subtitle}</p>
                </div>
                <span>
                  +${item.price * props.multiplier}/{props.planTypeAlias}
                </span>
              </label>
            ))}
          </div>
        </div>
        <StepSubmit
          currentActiveStep={props.currentActiveStep}
          validation={props.validation.stepThree}
          setCurrentActiveStep={props.setCurrentActiveStep}
          calculatePrice={calculatePrice}
        />
      </>
    )
  );
};

export default StepThree_addOn;

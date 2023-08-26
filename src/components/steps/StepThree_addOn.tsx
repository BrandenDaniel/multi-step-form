import React, { ChangeEvent, useState } from "react";
import StepSubmit from "../StepSubmit";

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep: any;
  validation: any;
};

const StepThree_addOn = (props: Props) => {
  const [selectedOptions, setSelectedOptions] = useState([
    {
      id: "onlineServices",
      subscribed: false,
      price: "$1/mo",
    },
    {
      id: "largerStorage",
      subscribed: false,
      price: "$2/mo",
    },
    {
      id: "customizableProfile",
      subscribed: false,
      price: "$2/mo",
    },
  ]);

  const content = [
    {
      title: "Online service",
      subtitle: "Access to multiplayer",
      price: "$1/mo",
      id: "onlineServices",
    },
    {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      price: "+$2/mo",
      id: "largerStorage",
    },
    {
      title: "Customizable profile",
      subtitle: "Custom theme on your profile",
      price: "+$2/mo",
      id: "customizableProfile",
    },
  ];

  const handleOptionSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const updateOptions = selectedOptions.map((option) => {
      if (e.currentTarget.checked && option.id === e.currentTarget.id) {
        return { ...option, subscribed: true };
      } else if (!e.currentTarget.checked && option.id === e.currentTarget.id) {
        return { ...option, subscribed: false };
      }
      return option;
    });

    console.log(updateOptions);

    setSelectedOptions(updateOptions);
  };

  return (
    props.currentActiveStep == 3 && (
      <>
        <div className="multiStepForm__form-addOn multiStepForm__form-container">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
          <div className="multiStepForm__form-addOn-options">
            {content.map((item) => (
              <label htmlFor={item.id} key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={(e) => handleOptionSelect(e)}
                />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.subtitle}</p>
                </div>
                <span>{item.price}</span>
              </label>
            ))}
          </div>
        </div>
        <StepSubmit
          currentActiveStep={props.currentActiveStep}
          validation={props.validation.stepThree}
          setCurrentActiveStep={props.setCurrentActiveStep}
        />
      </>
    )
  );
};

export default StepThree_addOn;

"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import StepOne_info from "@/components/steps/StepOne_info";
import StepTwo_plan from "@/components/steps/StepTwo_plan";
import StepThree_addOn from "@/components/steps/StepThree_addOn";
import StepFour_summary from "@/components/steps/StepFour_summary";
import Confirmation from "@/components/Confirmation";

const Page = () => {
  const [currentActiveStep, setCurrentActiveStep] = useState(1);
  const [validation, setValidation] = useState({
    stepOne: false,
    stepTwo: true,
    stepThree: true,
    stepFour: false,
  });

  const [plan, setPlan] = useState("Arcade");
  const [planType, setPlanType] = useState("Monthly");
  const [multiplier, setMultiplier] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([
    {
      title: "Online service",
      subtitle: "Access to multiplayer",
      id: "onlineServices",
      subscribed: false,
      price: 1 * multiplier,
    },
    {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      id: "largerStorage",
      subscribed: false,
      price: 2 * multiplier,
    },
    {
      title: "Customizable profile",
      subtitle: "Custom theme on your profile",
      id: "customizableProfile",
      subscribed: false,
      price: 2 * multiplier,
    },
  ]);
  const [mainPrice, setMainPrice] = useState(0);
  const [secondaryPrice, setSecondaryPrice] = useState(0);

  return (
    <div className="multiStepForm">
      <Sidebar currentActiveStep={currentActiveStep} />
      <form className="multiStepForm__form">
        <StepOne_info
          currentActiveStep={currentActiveStep}
          setCurrentActiveStep={setCurrentActiveStep}
          validation={validation}
          setValidation={setValidation}
        />
        <StepTwo_plan
          currentActiveStep={currentActiveStep}
          setCurrentActiveStep={setCurrentActiveStep}
          validation={validation}
          plan={plan}
          setPlan={setPlan}
          planType={planType}
          setPlanType={setPlanType}
          multiplier={multiplier}
          setMultiplier={setMultiplier}
        />
        <StepThree_addOn
          currentActiveStep={currentActiveStep}
          setCurrentActiveStep={setCurrentActiveStep}
          validation={validation}
          planType={planType}
          multiplier={multiplier}
          plan={plan}
          setMainPrice={setMainPrice}
          secondaryPrice={secondaryPrice}
          setSecondaryPrice={setSecondaryPrice}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        <StepFour_summary
          currentActiveStep={currentActiveStep}
          setCurrentActiveStep={setCurrentActiveStep}
          plan={plan}
          planType={planType}
          selectedOptions={selectedOptions}
          mainPrice={mainPrice}
        />
        <Confirmation currentActiveStep={currentActiveStep} />
      </form>
    </div>
  );
};

export default Page;

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
    stepFour: true,
  });

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
  const [plan, setPlan] = useState("Arcade");
  const [planType, setPlanType] = useState("Monthly");
  const [planTypeAlias, setPlanTypeAlias] = useState("mo");
  const [multiplier, setMultiplier] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([
    {
      title: "Online service",
      subtitle: "Access to multiplayer",
      id: "onlineServices",
      subscribed: false,
      price: 1,
    },
    {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      id: "largerStorage",
      subscribed: false,
      price: 2,
    },
    {
      title: "Customizable profile",
      subtitle: "Custom theme on your profile",
      id: "customizableProfile",
      subscribed: false,
      price: 2,
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
          inputs={inputs}
          setInputs={setInputs}
        />
        <StepTwo_plan
          currentActiveStep={currentActiveStep}
          setCurrentActiveStep={setCurrentActiveStep}
          validation={validation}
          plan={plan}
          setPlan={setPlan}
          planType={planType}
          planTypeAlias={planTypeAlias}
          setPlanTypeAlias={setPlanTypeAlias}
          setPlanType={setPlanType}
          multiplier={multiplier}
          setMultiplier={setMultiplier}
        />
        <StepThree_addOn
          currentActiveStep={currentActiveStep}
          setCurrentActiveStep={setCurrentActiveStep}
          validation={validation}
          planType={planType}
          planTypeAlias={planTypeAlias}
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
          multiplier={multiplier}
          selectedOptions={selectedOptions}
          mainPrice={mainPrice}
          secondaryPrice={secondaryPrice}
          planTypeAlias={planTypeAlias}
          validation={validation}
          inputs={inputs}
        />
        <Confirmation currentActiveStep={currentActiveStep} />
      </form>
    </div>
  );
};

export default Page;

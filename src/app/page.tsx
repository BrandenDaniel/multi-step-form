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
    stepThree: false,
    stepFour: false,
  });

  const [plan, setPlan] = useState("Arcade");
  const [planType, setPlanType] = useState("month");

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
          setValidation={setValidation}
          plan={plan}
          setPlan={setPlan}
          planType={planType}
          setPlanType={setPlanType}
        />
        <StepThree_addOn currentActiveStep={currentActiveStep} />
        <StepFour_summary currentActiveStep={currentActiveStep} />
        <Confirmation currentActiveStep={currentActiveStep} />
      </form>
    </div>
  );
};

export default Page;

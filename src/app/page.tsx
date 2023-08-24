"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import StepOne_info from "@/components/steps/StepOne_info";
import StepSubmit from "@/components/StepSubmit";
import StepTwo_plan from "@/components/steps/StepTwo_plan";
import StepThree_addOn from "@/components/steps/StepThree_addOn";
import StepFour_summary from "@/components/steps/StepFour_summary";
import Confirmation from "@/components/Confirmation";

type Step = {
  currentActiveStep: Number;
  setCurrentActiveStep: any;
};

const Page = () => {
  const [currentActiveStep, setCurrentActiveStep] = useState(1);

  return (
    <div className="multiStepForm">
      <Sidebar currentActiveStep />
      <form className="multiStepForm__form">
        <StepOne_info
          currentActiveStep
          setCurrentActiveStep={setCurrentActiveStep}
        />
        <StepTwo_plan currentActiveStep />
        <StepThree_addOn currentActiveStep />
        <StepFour_summary currentActiveStep />
        <Confirmation currentActiveStep />
        <StepSubmit
          currentActiveStep={currentActiveStep}
          setCurrentActiveStep={setCurrentActiveStep}
        />
      </form>
    </div>
  );
};

export default Page;

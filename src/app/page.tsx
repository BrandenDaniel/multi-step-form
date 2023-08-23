import Sidebar from "@/components/Sidebar";
import StepOne_info from "@/components/StepOne_info";
import StepSubmit from "@/components/StepSubmit";
import StepTwo_plan from "@/components/StepTwo_plan";
import React from "react";

const page = () => {
  return (
    <div className="multiStepForm">
      <Sidebar />
      <form className="multiStepForm__form">
        {/* <StepOne_info /> */}
        <StepTwo_plan />
        <StepSubmit />
      </form>
    </div>
  );
};

export default page;

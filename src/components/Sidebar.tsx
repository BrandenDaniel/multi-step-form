import React from "react";

type Step = {
  step: number;
  title: string;
};

type Props = {
  currentActiveStep: number;
};

const Sidebar = ({ currentActiveStep }: Props) => {
  const content: Array<Step> = [
    { step: 1, title: "YOUR INFO" },
    { step: 2, title: "SELECT PLAN" },
    { step: 3, title: "ADD-ONS" },
    { step: 4, title: "SUMMARY" },
  ];

  return (
    <div className="multiStepForm__sidebar">
      <div className="multiStepForm__sidebar-steps">
        {content.map((item) => (
          <div
            className={`multiStepForm__sidebar-steps-item ${
              currentActiveStep == item.step
                ? "multiStepForm__sidebar-steps-item--active"
                : ""
            }`}
            key={item.step}
          >
            <span>{item.step}</span>
            <div>
              <span>Step {item.step}</span>
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

import React, { MouseEvent, ChangeEvent, useState } from "react";
import Image from "next/image";
import ArcadeIcon from "../../assets/icon-arcade.svg";
import AdvancedIcon from "../../assets/icon-advanced.svg";
import ProIcon from "../../assets/icon-pro.svg";
import StepSubmit from "../StepSubmit";

type Props = {
  currentActiveStep: number;
  setCurrentActiveStep: any;
  validation: any;
  plan: string;
  setPlan: any;
  planType: string;
  setPlanType: any;
  multiplier: number;
  setMultiplier: any;
};

const StepTwo_plan = (props: Props) => {
  const content = [
    {
      image: ArcadeIcon,
      title: "Arcade",
      price: `${9 * props.multiplier}/${
        props.planType == "Monthly" ? "mo" : "yr"
      }`,
      bonus: "2 months free",
    },
    {
      image: AdvancedIcon,
      title: "Advanced",
      price: `${12 * props.multiplier}/${
        props.planType == "Monthly" ? "mo" : "yr"
      }`,
      bonus: "2 months free",
    },
    {
      image: ProIcon,
      title: "Pro",
      price: `${15 * props.multiplier}/${
        props.planType == "Monthly" ? "mo" : "yr"
      }`,
      bonus: "2 months free",
    },
  ];

  const handlePlanSelect = (
    e: MouseEvent<HTMLButtonElement>,
    title: string
  ) => {
    e.preventDefault();
    props.setPlan(title);
  };

  const handlePlanTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked
      ? (props.setPlanType("Yearly"), props.setMultiplier(10))
      : (props.setPlanType("Monthly"), props.setMultiplier(1));
  };

  return (
    props.currentActiveStep == 2 && (
      <>
        <div className="multiStepForm__form-plan multiStepForm__form-container">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>

          <div className="multiStepForm__form-plan-options">
            {content.map((item) => (
              <button
                key={item.title}
                className={
                  item.title == props.plan
                    ? "multiStepForm__form-plan-options-active"
                    : ""
                }
                onClick={(e) => handlePlanSelect(e, item.title)}
              >
                <Image src={item.image} alt={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                  <span
                    className={props.planType == "Yearly" ? "show-bonus" : ""}
                  >
                    {item.bonus}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="multiStepForm__form-plan-billing">
            <span
              className={
                props.planType == "Monthly"
                  ? "multiStepForm__form-plan-billing-active"
                  : ""
              }
            >
              Monthly
            </span>
            <input
              type="checkbox"
              onChange={handlePlanTypeChange}
              checked={props.planType == "Yearly" ? true : false}
            />
            <span
              className={
                props.planType == "Yearly"
                  ? "multiStepForm__form-plan-billing-active"
                  : ""
              }
            >
              Yearly
            </span>
          </div>
        </div>
        <StepSubmit
          currentActiveStep={props.currentActiveStep}
          setCurrentActiveStep={props.setCurrentActiveStep}
          validation={props.validation.stepTwo}
        />
      </>
    )
  );
};

export default StepTwo_plan;

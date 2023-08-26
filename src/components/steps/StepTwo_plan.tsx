import React, { MouseEvent, ChangeEvent } from "react";
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
};

const StepTwo_plan = (props: Props) => {
  const content = [
    {
      image: ArcadeIcon,
      title: "Arcade",
      price: `${props.planType == "month" ? 9 : 9 * 10}/${
        props.planType == "month" ? "mo" : "yr"
      }`,
      bonus: "2 months free",
    },
    {
      image: AdvancedIcon,
      title: "Advanced",
      price: `${props.planType == "month" ? 12 : 12 * 10}/${
        props.planType == "month" ? "mo" : "yr"
      }`,
      bonus: "2 months free",
    },
    {
      image: ProIcon,
      title: "Pro",
      price: `${props.planType == "month" ? 15 : 15 * 10}/${
        props.planType == "month" ? "mo" : "yr"
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
      ? props.setPlanType("year")
      : props.setPlanType("month");
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
                    className={props.planType == "year" ? "show-bonus" : ""}
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
                props.planType == "month"
                  ? "multiStepForm__form-plan-billing-active"
                  : ""
              }
            >
              Monthly
            </span>
            <input type="checkbox" onChange={handlePlanTypeChange} />
            <span
              className={
                props.planType == "year"
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

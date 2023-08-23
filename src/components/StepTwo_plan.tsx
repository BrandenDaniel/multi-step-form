import Image from "next/image";
import ArcadeIcon from "../assets/icon-arcade.svg";
import AdvancedIcon from "../assets/icon-advanced.svg";
import ProIcon from "../assets/icon-pro.svg";

const StepTwo_plan = () => {
  return (
    <div className="multiStepForm__form-plan multiStepForm__form-container">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>

      <div className="multiStepForm__form-plan-options">
        <button className="multiStepForm__form-plan-options-active">
          <Image src={ArcadeIcon} alt="Arcade" />
          <div>
            <h2>Arcade</h2>
            <p>$9/mo</p>
            <span>2 months free</span>
          </div>
        </button>

        <button>
          <Image src={AdvancedIcon} alt="Advanced" />
          <div>
            <h2>Advanced</h2>
            <p>$12/mo</p>
            <span>2 months free</span>
          </div>
        </button>

        <button>
          <Image src={ProIcon} alt="Pro" />
          <div>
            <h2>Pro</h2>
            <p>$15/mo</p>
            <span>2 months free</span>
          </div>
        </button>
      </div>

      <div className="multiStepForm__form-plan-billing">
        <span className="multiStepForm__form-plan-billing-active">Monthly</span>
        <input type="checkbox" />
        <span>Yearly</span>
      </div>
    </div>
  );
};

export default StepTwo_plan;

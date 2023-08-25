import Image from "next/image";
import ThankYouIcon from "../assets/icon-thank-you.svg";

type Props = {
  currentActiveStep: number;
};

const Confirmation = ({ currentActiveStep }: Props) => {
  return currentActiveStep == 5 ? (
    <div className="multiStepForm__form-confirmation multiStepForm__form-container">
      <Image src={ThankYouIcon} alt="thank you" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! I hope you enjoyed using this
        multi-step form demo. Please feel free to email me at
        brandendanielng@gmail if you want to share some thoughts or if you just
        want to say hi!
      </p>
    </div>
  ) : (
    ""
  );
};

export default Confirmation;

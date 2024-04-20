import { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import Destination from "./Destination";
import Timing from "./Timing";
import Review from "./Review";
import ThankYou from "./ThankYou";

const { Step } = Steps;

const detailsInitialState = {
  destination: "",
};

const TimingInitialState = {
  address1: "",
  address2: "",
  city: "",
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Destination />;
    case 1:
      return <Timing />;
    case 2:
      return <Review />;
    case 3:
      return <ThankYou />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [timing, setTiming] = useState(TimingInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setTiming(TimingInitialState);
      return;
    }

    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <Provider value={{ details, setDetails, next, prev, timing, setTiming }}>
      <Steps current={currentStep}>
        <Step title={"Destination"} />
        <Step title={"Timing"} />
        <Step title={"Review and Post"} />
      </Steps>
      <main>{renderStep(currentStep)}</main>
    </Provider>
  );
};
export default MultiStepForm;

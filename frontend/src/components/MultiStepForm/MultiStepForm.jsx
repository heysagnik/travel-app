import { useState } from "react";
import { Steps, ConfigProvider } from "antd";
import { Provider } from "./MultiStepFormContext";
import Destination from "./Destination";
import Timing from "./Timing";
import Review from "./Review";
import NumberOfMembers from "./NumberOf";

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
      return <NumberOfMembers />;
    case 3:
      return <Review />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [timing, setTiming] = useState(TimingInitialState);
  const [members, setMembers] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setTiming(TimingInitialState);
      setMembers("");
      return;
    }

    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <Provider
      value={{
        details,
        setDetails,
        next,
        prev,
        timing,
        setTiming,
        members,
        setMembers,
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#fe5401",
              algorithm: true, // Enable algorithm
            },
            Input: {
              colorPrimary: "#fe5401",
              algorithm: true, // Enable algorithm
            },
            Steps: {
              colorPrimary: "#fe5401",
              algorithm: true, // Enable algorithm
            },
          },
        }}
      >
        <Steps current={currentStep}>
          <Step title={"Destination"} />
          <Step title={"Timing"} />
          <Step title={"Members"} />
          <Step title={"Review and Post"} />
        </Steps>

        <main>{renderStep(currentStep)}</main>
      </ConfigProvider>
    </Provider>
  );
};
export default MultiStepForm;

import { useState } from "react";
import { Steps, ConfigProvider } from "antd";
import { Provider } from "./MultiStepFormContext";
import Destination from "./Destination";
import Timing from "./Timing";
import Review from "./Review";
import NumberOfMembers from "./NumberOf";
import axios from "axios";

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

  const handleSubmit = async (title, content, limit) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/posts/new",
        {
          title,
          content,
          limit,
        },
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const next = () => {
    if (currentStep === 3) {
      // console.log(details, timing, members);
      const title = details.destination;
      const content = `From ${timing.fromDate} to ${timing.toDate} in ${details.destination}.`;
      const limit = members.members;
      console.log(title, content, limit);
      handleSubmit(title, content, limit);
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

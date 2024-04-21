import { useContext } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";

const Destination = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={{ destination: details.destination || "" }}
      onSubmit={(values) => {
        setDetails({ ...details, destination: values.destination });
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.destination) errors.destination = "You are travelling without a destination? Really?";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"max-w-xs mx-auto mt-40 mb-40"}>
            <div className={`mb-4 space-y-6 ${errors.destination && "border-red-500"}`}>
                  <label className="font-semibold text-xl mb-4">What's your Destination? *</label>
                 <Input name="destination" className="border border-gray-300 rounded-md p-2" />
                 <p className="text-red-500">{errors.destination}</p>
            </div>
            <div
              className={"absolute bottom-6 right-6"}
            >
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Destination;

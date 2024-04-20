// Destination.jsx
import { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

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
        if (!values.destination) errors.destination = "Destination is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div
              className={`form__item ${errors.destination && "input__error"}`}
            >
              <label>Destination *</label>
              <Input name={"destination"} />
              <p className={"error__feedback"}>{errors.destination}</p>
            </div>
            <div
              className={"form__item button__items d-flex justify-content-end"}
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

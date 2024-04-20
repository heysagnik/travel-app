import { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";
import "../../App.css";

const Timing = () => {
  const { setTiming, next, prev } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={{
        fromDate: "",
        toDate: "",
      }}
      onSubmit={(values) => {
        setTiming(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.fromDate) errors.fromDate = "From Date is required";
        if (!values.toDate) errors.toDate = "To Date is required";
        return errors;
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <div className={"details__wrapper"}>
          <div className={`form__item ${errors.fromDate && "input__error"}`}>
            <label>From Date *</label>
            <input
              className="border-slate-400 border-2 rounded-md p-2 w-full"
              type="date"
              name="fromDate"
              value={values.fromDate}
              onChange={handleChange}
            />
            <p className={"error__feedback"}>{errors.fromDate}</p>
          </div>
          <div className={`form__item ${errors.toDate && "input__error"}`}>
            <label>To Date *</label>
            <input
              className="border-slate-400 border-2 rounded-md p-2 w-full"
              type="date"
              name="toDate"
              value={values.toDate}
              onChange={handleChange}
            />
            <p className={"error__feedback"}>{errors.toDate}</p>
          </div>
          <div
            className={
              "form__item button__items d-flex justify-content-between"
            }
          >
            <Button type={"default"} onClick={prev}>
              Back
            </Button>
            <Button type={"primary"} onClick={handleSubmit}>
              Next
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Timing;

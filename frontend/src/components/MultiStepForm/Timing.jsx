import { useContext } from "react";
import { Formik } from "formik";
import { Button, Input } from "antd";
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
            <Input
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
            <Input
              className="border-slate-400 border-2 rounded-md p-2 w-full"
              type="date"
              name="toDate"
              value={values.toDate}
              onChange={handleChange}
            />
            <p className={"error__feedback"}>{errors.toDate}</p>
          </div>
          <div className={"flex justify-between items-center mt-4 "}>
            <Button
              type={"default"}
              onClick={prev}
              className="absolute bottom-6 left-4"
            >
              Back
            </Button>
            <Button
              type={"primary"}
              onClick={handleSubmit}
              className="absolute bottom-6 right-4 bg-[#FE5401] "
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Timing;

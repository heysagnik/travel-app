import { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";
import "../../App.css";

const NumberOfMembers = () => {
  const { setMembers, next, prev } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={{
        members: "",
      }}
      onSubmit={(values) => {
        setMembers(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.members) errors.members = "Number of members is required";
        return errors;
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <div className={"details__wrapper"}>
          <div className={`form__item ${errors.members && "input__error"}`}>
            <label>Number of Members *</label>
            <input
              className="border-slate-400 border-2 rounded-md p-2 w-full"
              type="number"
              name="members"
              value={values.members}
              onChange={handleChange}
            />
            <p className={"error__feedback"}>{errors.members}</p>
          </div>
          <div
            className={
              "flex justify-between items-center mt-4 "
            }
          >
            <Button type={"default"} onClick={prev} className="absolute bottom-6 left-4">
              Back
            </Button>
            <Button type={"primary"} onClick={handleSubmit} className="absolute bottom-6 right-4 bg-[#FE5401]">
              Next
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default NumberOfMembers;
// Review.jsx
import { Button } from "antd";
import { NavArrowRight } from "iconoir-react";
import { useContext, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import { Checkmark } from "react-checkmark";
const Review = () => {
  const { details, timing, next, prev } = useContext(MultiStepFormContext);
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    next();
    document.getElementById("my_modal_3").close();
  };
  return (
    <>
      <div
        className={`details__wrapper flex flex-col gap-2 ${
          visible ? "hidden" : ""
        }`}
      >
        <div>
          <div className="text-xl">Destination:</div>
          <div className="text-2xl">{details.destination}</div>
        </div>
        <div className="">
          <div className="text-xl ">Timing</div>
          <div className="text-2xl flex flex-row gap-2">
            <div className="">{timing.fromDate}</div>
            <NavArrowRight />
            <div className="">{timing.toDate}</div>
          </div>
        </div>
        <div className={"flex justify-between items-center mt-4 "}>
          <Button
            type={"default"}
            onClick={prev}
            className="absolute bottom-6 left-4 "
          >
            Back
          </Button>
          <Button
            type={"primary"}
            onClick={() => setVisible(true)}
            className="absolute bottom-6 left-4"
          >
            Confirm
          </Button>
        </div>
      </div>
      {visible && (
        <div className={"details__wrapper flex flex-col items-center gap-2"}>
          <Checkmark />
          <div>Thank You!</div>
          <div>Your Post has been published</div>
          <Button type={"default"} onClick={onClick}>
            Done
          </Button>
        </div>
      )}
    </>
  );
};

export default Review;

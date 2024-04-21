// Review.jsx
import { Button, Col, Row } from "antd";
import { useContext, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import { Checkmark } from "react-checkmark";
const Review = () => {
  const { details, timing,members, next, prev } = useContext(MultiStepFormContext);
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    next();
    document.getElementById("my_modal_3").close();
  };
  return (
    <>
      <div className={`details__wrapper ${visible ? "hidden" : ""}`}>
        <Row>
          <Col span={24}>
            <h1>Destination: {details.destination}</h1>
          </Col>
          <Col span={24}>
            <h1>Timing:</h1>
            <div>
              From: {timing.fromDate} To: {timing.toDate}
            </div>
          </Col>
          <Col span={24}>
            <h1>Members: {members}</h1>
          </Col>
        </Row>
        <div
            className={
              "flex justify-between items-center mt-4 "
            }
          >
          <Button type={"default"} onClick={prev} className="absolute bottom-6 left-4 ">
            Back
          </Button>
          <Button type={"primary"} onClick={() => setVisible(true)} className="absolute bottom-6 left-4">
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

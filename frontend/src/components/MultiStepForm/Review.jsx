// Review.jsx
import { Button, Col, Row } from "antd";
import { useContext } from "react";
import MultiStepFormContext from "./MultiStepFormContext";

const Review = () => {
  const { details, timing, next, prev } = useContext(MultiStepFormContext);

  return (
    <div className={"details__wrapper"}>
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
      </Row>
      <div
        className={"form__item button__items d-flex justify-content-between"}
      >
        <Button type={"default"} onClick={prev}>
          Back
        </Button>
        <Button type={"primary"} onClick={next}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Review;

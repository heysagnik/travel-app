import { Checkmark } from "react-checkmark";
import { Button } from "antd";
// eslint-disable-next-line react/prop-types
export default function ThankYou({ next }) {
  const onClick = () => {
    next();
    document.getElementById("my_modal_3").close();
  };
  return (
    <div className={"details__wrapper flex flex-col items-center gap-2"}>
      <Checkmark />
      <div>Thank You!</div>
      <div>{(details, timing, members)}</div>
      <div>Your Post has been published</div>
      <Button type={"default"} onClick={onClick}>
        Done
      </Button>
    </div>
  );
}

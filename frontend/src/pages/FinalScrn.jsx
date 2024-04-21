import { useEffect } from "react";
import axios from "axios";
import { authState } from "../recoil/authState";

const FinalScrn = () => {
  // const auth = useRecoilValue(authState);
  // useEffect(() => {
  //   const userId = auth.id;
  // }, []);

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-xl text-center">Trip</h1>
      <p className="text-md text-center">
        Thank you for giving the user company. You will receive an SMS with
        their contact details soon.
      </p>
      <p className="text-lg text-center">Happy Travelling!</p>
      <button
        className="btn btn-primary w-1/2"
        onClick={() => {
          document.getElementById("details_sent_modal").close();
        }}
      >
        OK
      </button>
    </div>
  );
};

export default FinalScrn;

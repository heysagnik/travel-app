import React from "react";

const FinalScrn = () => {
  return (
    <div>
      {alert("Contact details sent to the registered mobile number.")}
      <h1 className="text-3xl text-center">A trip to Goa with Anita</h1>
      <br></br>
      <p className="text-2xl text-center">
        Thank you for giving Anita accompany. You will receive an SMS their
        contact details soon.
      </p>
      <br></br>
      <br></br>
      <p className=" text-5xl text-center">Happy Travelling!</p>
      <br></br>
      <br></br>
      <br></br>

      <p className="text-center">
        <a href="/discover">
          <button className="bg-slate-200 p-2 rounded-xl">
            Back to Discover
          </button>
        </a>
      </p>
    </div>
  );
};

export default FinalScrn;

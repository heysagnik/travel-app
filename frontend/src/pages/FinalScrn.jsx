const FinalScrn = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-lg text-center">A trip to Goa with Anita</h1>
      <p className="text-md text-center">
        Thank you for giving Anita accompany. You will receive an SMS with
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

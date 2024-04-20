import MultiStepForm from "./MultiStepForm/MultiStepForm";

export default function Modal() {
  return (
    <>
      <dialog id="my_modal_3" className="modal rounded-3xl p-10 select-none z-[1050]">
        <div className="modal-box min-w-3xl max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
              ✕
            </button>
          </form>
          <MultiStepForm />
        </div>
      </dialog>
    </>
  );
}

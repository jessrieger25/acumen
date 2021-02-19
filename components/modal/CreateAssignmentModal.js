import { Modal } from "./Modal";

export function CreateAssignmentModal({ close }) {
  return (
    <Modal
      close={close}
      title="Create an assignment"
      action="Create"
      onAction={() => console.log("Action!")}
    >
      <div className="px-5 py-3">
        <form className="flex flex-col gap-2">
          <label>Title</label>
          <input
            type="text"
            className="w-60 p-1 px-2 border rounded border-gray-300"
          ></input>
          <label>Description</label>
          <textarea
            col="40"
            row="3"
            className="p-1 px-2 max-w-prose border rounded border-gray-300 max-h-lg resize-none"
          ></textarea>
          <label>Template</label>
          <input type="file"></input>
          <label>Tests</label>
          <input type="file"></input>
        </form>
      </div>
    </Modal>
  );
}

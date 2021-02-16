export function Modal({ close, title, action, onAction, children, size }) {
  const maxWidth = `max-w-${size || "xl"}`;
  return (
    <>
      <div className="bg-black bg-opacity-30 fixed inset-0"></div>
      <div
        className="fixed inset-0 flex justify-center items-center"
        // rather than onClick to prevent a user starting a click in the dialog
        // and dragging outside the dialog
        onMouseDown={close}
      >
        <div
          className={`bg-gray-50 rounded-md shadow-lg flex flex-col flex-1 ${maxWidth}`}
          onMouseDown={(e) => {
            // prevent closing the dialog when clicking the modal (rather than off the modal)
            e.stopPropagation();
          }}
        >
          <div className="p-5 bg-blue-600 text-white">
            <h1 className="text-xl font-medium">{title}</h1>
          </div>
          {children}

          <div className="flex gap-2 mt-10 self-end m-6">
            <button
              className="py-2 px-4 text-gray-800 hover:bg-gray-200 rounded"
              onClick={close}
            >
              Cancel
            </button>
            <button
              className="py-2 px-4 text-white bg-blue-600 rounded"
              onClick={onAction}
            >
              {action}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import "react";

export function LoadingButton({ children, loadState, ...attrs }) {
  const enabledButtonClasses = "hover:bg-green-600 focus:bg-green-600 ";
  const shouldDisable = loadState === "loading" || loadState === "successful";
  return (
    <button
      className={`inline-flex place-content-center rounded bg-green-500 p-2 text-white ${
        shouldDisable ? "cursor-not-allowed" : enabledButtonClasses
      }`}
      disabled={shouldDisable}
      {...attrs}
    >
      {loadState === "loading" ? Spinner : null}
      {loadState === "successful" ? Check : null}
      {children}
    </button>
  );
}
const Spinner = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="animate-spin mr-2"
  >
    <path
      opacity="0.2"
      fillRule="evenodd"
      d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="currentColor"
    />
    <path
      d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
      fill="currentColor"
    />
  </svg>
);

const Check = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
      fill="currentColor"
    />
  </svg>
);

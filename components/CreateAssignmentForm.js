import { LoadingButton } from "./LoadingButton";
import { useCreateAssignment } from "../hooks/useCreateAssignment";
import { useState, useRef } from "react";
import { useUpload } from "../hooks/useUpload";

export function CreateAssignmentForm({ onSuccess }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { upload, uploadState } = useUpload();

  const templateInput = useRef(null);
  const testInput = useRef(null);

  if (uploadState === "successful") {
    onSuccess?.();
  }
  return (
    <div
      className="absolute w-full p-3 z-10 bg-white border-green-500 border-2 rounded-bl rounded-br flex flex-col gap-4"
      style={{ marginRight: "-20em" }}
    >
      <label>
        <span className="font-bold">Title</span>
        <input
          className="p-2 px-3 border-2 border-gray-300 w-full rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
      </label>
      <label>
        <span className="font-bold">Description</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 px-3 border-2 border-gray-300 w-full rounded"
        ></textarea>
      </label>
      <label>
        <span className="font-bold">Test File</span>
        <input
          ref={testInput}
          className="flex flex-col"
          type="file"
          accept=".py"
        ></input>
      </label>
      <label>
        <span className="font-bold">Template File</span>
        <input
          ref={templateInput}
          className="flex flex-col"
          type="file"
          accept=".py"
        ></input>
      </label>
      <LoadingButton
        onClick={() =>
          upload(testInput, templateInput, {
            title,
            description,
          })
        }
        defaultIcon={Add}
        loadState={uploadState}
      >
        <span className="font-bold">
          {uploadState === "successful" ? "Created" : "Create"}
        </span>
      </LoadingButton>
    </div>
  );
}
const Add = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
      fill="currentColor"
    />
  </svg>
);

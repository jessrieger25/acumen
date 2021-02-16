import { useState } from "react";
import { CreateAssignmentForm } from "./CreateAssignmentForm";

export function CreateAssignment() {
  const [isOpen, setIsOpen] = useState(false);
  const rounded = `rounded-tr rounded-tl ${isOpen ? "" : "rounded"}`;
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex gap-2 p-3 ${rounded} bg-green-500 text-white`}
      >
        Create Assignment {ChevronDown}
      </button>
      {isOpen ? (
        <CreateAssignmentForm
          onSuccess={() => setTimeout(() => setIsOpen(false), 500)}
        />
      ) : (
        ""
      )}
    </div>
  );
}
const ChevronDown = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
      fill="currentColor"
    />
  </svg>
);

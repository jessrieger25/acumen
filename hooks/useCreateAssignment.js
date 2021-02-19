import { useState } from "react";

export function useCreateAssignment() {
  const response = useState(null);
  const createAssignment = () => console.log("assignment created");
  return { createAssignment, response };
}

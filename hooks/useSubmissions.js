import { useState } from "react";

export function useSubmissions() {
  const [submissions, setSubmissions] = useState([
    {
      student: "Jess",
      dateSubmitted: new Date(),
      result: "failed all of them",
      link: "uploads/upload_8a2d8db56e8e60ae4ee06a419a3a77f4.py",
    },
  ]);
  return submissions;
}

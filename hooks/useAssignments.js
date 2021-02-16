import { useState } from "react";

export function useGetAssignment(id) {
  return {
    id: 1,
    title: "First Python Assignment",
    description:
      "Your first python assignment, to get used to how to do things.",
    submissionsAllowed: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    files: [
      {
        id: 1,
        name: "a file",
        path: "/uploads/upload_2c8b87124350bd17ff22c42cf03b1260.py",
        type: "template",
      },
      {
        id: 1,
        name: "a file",
        path: "/uploads/upload_2c8b87124350bd17ff22c42cf03b1260.py",
        type: "test",
      },
    ],
  };
}
export function useAssignments() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "First Python Assignment",
      description:
        "Your first python assignment, to get used to how to do things.",
      submissionsAllowed: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      files: [
        {
          id: 1,
          name: "a file",
          path: "/uploads/upload_2c8b87124350bd17ff22c42cf03b1260.py",
          type: "template",
        },
        {
          id: 1,
          name: "a file",
          path: "/uploads/upload_2c8b87124350bd17ff22c42cf03b1260.py",
          type: "test",
        },
      ],
    },
    {
      id: 2,
      title: "Password generator",
      description: "Generate a password so that your school account is secure.",
      submissionsAllowed: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      files: [
        {
          id: 1,
          name: "a file",
          path: "/uploads/upload_2c8b87124350bd17ff22c42cf03b1260.py",
          type: "template",
        },
        {
          id: 1,
          name: "a file",
          path: "/uploads/upload_2c8b87124350bd17ff22c42cf03b1260.py",
          type: "test",
        },
      ],
    },
  ]);

  return assignments;
}

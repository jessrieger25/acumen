import { useRouter } from "next/router";
import { useGetAssignment } from "../../hooks/useAssignments";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Table } from "../../components/Table";
import { FileCell } from "../../components/FileCell";
import { LoadingButton } from "../../components/LoadingButton";
import { useRef } from "react";
import { UploadIcon } from "../../components/icons/UploadIcon";

export default function Assignment() {
  const uploadRef = useRef(null);
  const router = useRouter();
  const assignment = useGetAssignment(router.query.id);
  const autoUpload = () => {
    const file = uploadRef.current?.files[0];
    console.log(file);
  };
  const submissions = [
    {
      id: 1,
      completed: true,
      file: { pathname: "/uploads/upload_2c8b87124350bd17ff22c42cf03b1260.py" },
      grade: "A",
    },
  ];
  return (
    <>
      <h1 className="text-3xl">{assignment.title}</h1>
      <p className="inline-flex mt-1">
        <FileCell
          path={assignment.files.find((f) => f.type === "test").path}
          text="Test file"
        />
        &nbsp;&bull; Created {formatDistanceToNow(assignment.createdAt)} ago
      </p>

      <p className="mt-3 mb-10">{assignment.description}</p>
      <h2 className="text-xl font-medium mb-3">Steps</h2>
      <ol className="list-decimal">
        <li>
          <span className="inline-flex">
            Download the
            <FileCell
              path={assignment.files.find((f) => f.type === "template").path}
              text="Template"
            />
          </span>
        </li>
        <li>Complete the assignment by modifying the template.</li>
        <li>Upload your code.</li>
      </ol>

      <span className="flex justify-between items-center">
        <h2 className="text-2xl py-5 pt-10 font-medium">Submissions</h2>
        <LoadingButton
          onClick={() => {
            uploadRef.current?.click();
          }}
        >
          <UploadIcon />
          Submit
        </LoadingButton>
        <input
          ref={uploadRef}
          onChange={autoUpload}
          type="file"
          accept=".py"
          className="hidden"
        ></input>
      </span>
      <Table
        headerToCell={submissions.map((s) => ({
          id: s.id,
          Completed: s.completed ? "true" : "false",
          Grade: s.grade,
          Submission: <FileCell path={s.file.pathname} />,
        }))}
      />
    </>
  );
}

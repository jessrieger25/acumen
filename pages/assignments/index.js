import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { CreateAssignment } from "../../components/CreateAssignment";
import { useAssignments } from "../../hooks/useAssignments";
import { Table } from "../../components/Table";
import { FileCell } from "../../components/FileCell";

export default function Assignments() {
  const assignments = useAssignments();
  return (
    <>
      <div className="container w-full">
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl mb-10">Instructor - Assignments</h1>
          <CreateAssignment />
        </div>
        <Table
          rowLinks={assignments.reduce((acc, a) => {
            acc[a.id] = `/assignments/${a.id}`;
            return acc;
          }, {})}
          headerToCell={assignments.map((a) => ({
            id: a.id,
            title: <span className="text-xl">{a.title}</span>,
            description: (
              <span className="italic text-sm text-gray-700">
                {a.description}
              </span>
            ),
            Created: (
              <span className="text-sm text-gray-500">
                {formatDistanceToNow(a.createdAt)} ago.
              </span>
            ),
            "Test File": (
              <FileCell path={a.files.find((f) => f.type === "test").path} />
            ),
            "Template File": (
              <FileCell
                path={a.files.find((f) => f.type === "template").path}
              />
            ),
          }))}
        />
      </div>
    </>
  );
}

export function SubmissionHeader() {
  return (
    <tr>
      <th className="p-4 w-10">#</th>
      <th className="p-4 text-left w-20">Result</th>
      <th className="p-4 w-prose truncate text-left">Submission</th>
      <th className="p-4 text-left w-48">Time</th>
    </tr>
  );
}

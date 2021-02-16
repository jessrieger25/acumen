import Link from "next/link";
import { useRouter } from "next/router";
import { CheckIcon } from "../icons/CheckIcon";
import { CloseIcon } from "../icons/CloseIcon";
import { HourglassIcon } from "../icons/HourglassIcon";

export function SubmissionRow({ submission }) {
  const router = useRouter();
  let hoverColor = "";
  let status = null;
  switch (submission.status) {
    case "pass":
      hoverColor = "hover:bg-green-100";
      status = PASS;
      break;
    case "fail":
      hoverColor = "hover:bg-red-100";
      status = FAIL;
      break;
    case "pending":
      hoverColor = "hover:bg-purple-100";
      status = PENDING;
      break;
  }
  return (
    <tr
      className={`cursor-pointer ${hoverColor} h-12 border-t border-gray-300`}
      onClick={() => {
        router.push(submission.href);
      }}
    >
      <td className="text-center">
        <Link href={submission.href}>{`${submission.number}`}</Link>
      </td>
      <td className="px-4">{status}</td>
      <td className="px-4 max-w-prose truncate">📎 {submission.name}</td>
      <td className="px-4">{submission.time}</td>
    </tr>
  );
}

const PASS = (
  <span className="flex items-center text-green-900">
    <CheckIcon />
    &nbsp;Pass
  </span>
);
const FAIL = (
  <span className="flex items-center text-red-900">
    <CloseIcon />
    &nbsp;Fail
  </span>
);
const PENDING = (
  <span className="flex items-center text-purple-900 animate-pulse">
    <HourglassIcon />
    &nbsp;Pending
  </span>
);

import { Fragment } from "react";
import { useSubmissions } from "../hooks/useSubmissions";
import { CreateAssignment } from "../components/CreateAssignment";

export default function Instructor() {
  const submissions = useSubmissions();
  const headers = ["Submission", "Result"];
  return (
    <>
      <div className="container w-2/3">
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl mb-10">Instructor - Assignments</h1>
          <CreateAssignment></CreateAssignment>
        </div>
        <table className="border-collapse border border-black w-full">
          <thead>
            <tr>
              {headers.map((h) => {
                return (
                  <th className="border border-black px-5 py-2 text-left">
                    {h}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {submissions.map((s) => {
                return (
                  <Fragment key={s.link}>
                    <td className="border border-black p-5">
                      <span className="inline-flex">
                        {DownloadIcon}
                        <a
                          className="cursor-pointer underline"
                          href={s.link}
                          target="_blank"
                        >
                          {s.link}
                        </a>
                      </span>
                    </td>
                    <td className="border border-black p-5">{s.result}</td>
                  </Fragment>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

const DownloadIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
  >
    <path
      d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z"
      fill="currentColor"
    />
    <path
      d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"
      fill="currentColor"
    />
  </svg>
);

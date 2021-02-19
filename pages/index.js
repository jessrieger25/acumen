import Head from "next/head";
import { useUpload } from "../hooks/useUpload";
import { LoadingButton } from "../components/LoadingButton";

export default function Home() {
  const { upload, inputRef, uploadState, uploadPath } = useUpload();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid w-full h-full place-items-center">
        <div className="flex flex-col gap-y-4">
          <label className="text-3xl" htmlFor="py-upload">
            Upload a Python Assignment
          </label>
          <input ref={inputRef} id="py-upload" type="file" accept=".py"></input>
          <LoadingButton onClick={upload} loadState={uploadState}>
            {uploadState === "successful" ? "Submitted" : "Submit"}
          </LoadingButton>
          {uploadPath ? (
            <a
              href={uploadPath.slice("public/".length)}
              target="_blank"
              className="inline-flex text-gray-500"
            >
              {DownloadIcon}
              Download your submission
            </a>
          ) : null}
        </div>
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

import { DownloadIcon } from "./icons/DownloadIcon";

export function DownloadButton({ href, children }) {
  return (
    <a
      download
      href={href}
      className="inline-flex align-items text-white bg-blue-600 p-3 px-4 rounded"
    >
      <DownloadIcon />
      &nbsp;
      {children}
    </a>
  );
}

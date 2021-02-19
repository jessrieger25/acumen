import Link from "next/Link";
import { DownloadIcon } from "./icons/DownloadIcon";

export function FileCell({ path, text }) {
  text = text ?? path;
  return (
    <span className={`inline-flex underline`}>
      {<DownloadIcon classes="mr-1" />}
      <Link href={path}>{text}</Link>
    </span>
  );
}

import Link from "next/link";

export function BreadcrumbLink({ link }) {
  return (
    <Link href={link.href}>
      <a title={link.text} className="rounded p-1 hover:bg-gray-100">
        {link.text}
      </a>
    </Link>
  );
}

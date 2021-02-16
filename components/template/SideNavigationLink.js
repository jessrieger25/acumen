import Link from "next/link";
const EXAMPLE_LINK = {
  text: "Hello world",
  href: "#",
  active: false,
};

export function SideNavigationLink({ link }) {
  return (
    <li>
      <Link href={link.href}>
        <a
          title={link.text}
          className={`block truncate max-w-prose py-2 -mx-5 px-5 hover:bg-blue-200 ${
            link.active ? "bg-blue-100 text-blue-900" : ""
          }  rounded`}
        >
          {link.text}
        </a>
      </Link>
    </li>
  );
}

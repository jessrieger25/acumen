import Link from "next/Link";
import { useRouter } from "next/router";

export function Nav() {
  const { pathname } = useRouter();
  return (
    <div className="border-b-2 border-gray-100 mb-20">
      <nav className="flex gap-5 container mx-auto py-10 items-baseline">
        <span className="text-xl font-black font-mono text-green-800 mr-10">
          Ackumen
        </span>
        <Link href="/assignments">
          <span
            className={
              "cursor-pointer py-3 " +
              (pathname.includes("/assignments") ? "font-bold" : "")
            }
          >
            Assignments
          </span>
        </Link>
      </nav>
    </div>
  );
}

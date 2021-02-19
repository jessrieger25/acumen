export function WarningBadge({ children }) {
  return (
    <span className="uppercase bg-yellow-100 text-yellow-700 text-xs font-bold p-1 px-2 inline-flex items-center rounded-lg border border-yellow-300">
      {children}
    </span>
  );
}

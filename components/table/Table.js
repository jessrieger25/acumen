export function Table({ header, children }) {
  return (
    <table className="table-fixed w-full border border-gray-200 -mx-10">
      <thead>{header}</thead>
      <tbody>{children}</tbody>
    </table>
  );
}

import { useRouter } from "next/router";

export function Table({ headerToCell, rowLinks }) {
  const router = useRouter();
  let makeOnRowClick = () => () => {};
  let clickable = false;
  if (Object.keys(rowLinks ?? {}).length > 0) {
    makeOnRowClick = (obj) => (e) => {
      e.preventDefault();
      router.push(rowLinks[obj.id]);
    };
    clickable = true;
  }
  return (
    <table className="border-collapse border border-black w-full">
      <thead>
        <tr>
          {Object.keys(headerToCell[0]).map((h) => (
            <th key={h} className="border border-black px-5 py-2 text-center">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {headerToCell.map((obj) => {
          return (
            <tr
              onClick={makeOnRowClick(obj)}
              key={obj.id}
              className={`${
                clickable ? "cursor-pointer" : ""
              } hover:bg-gray-50`}
            >
              {Object.values(obj).map((v, i) => {
                return (
                  <td
                    key={i}
                    className="border border-black px-5 py-2 text-left"
                  >
                    {v}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

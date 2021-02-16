import React from "react";
export function TopNavigation({ children }) {
  return (
    <nav className="px-5 py-3 text-gray-600 -mx-1">
      {/* Put a > between all the children */}
      {React.Children.toArray(children).reduce((prev, next, i) => [
        prev,
        <Spacer key={i} />,
        next,
      ])}
    </nav>
  );
}

function Spacer() {
  return (
    <span className="mx-1" role="presentation">
      >
    </span>
  );
}

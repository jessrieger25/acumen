export function Sidebar({ children }) {
  return (
    <div className="px-5 max-w-xs bg-gray-100 h-screen flex-grow flex flex-col">
      {children}
    </div>
  );
}

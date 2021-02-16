export function SideBarButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="-mx-5 px-5 py-3 mt-auto hover:bg-gray-200 bg-transparent flex items-center border-t-2 text-gray-600"
    >
      {children}
    </button>
  );
}

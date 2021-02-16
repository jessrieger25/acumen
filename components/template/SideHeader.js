export function SideHeader({ text, button }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <h1 className="text-gray-600 uppercase font-medium text-sm">{text}</h1>
      {button}
    </div>
  );
}

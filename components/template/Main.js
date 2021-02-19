export function Main({ children, title }) {
  return (
    <main className="px-32 pt-10 overflow-scroll flex-grow">
      <h1 className="text-4xl font-semibold mb-2">{title}</h1>
      {children}
    </main>
  );
}

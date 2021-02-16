import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} className="w-full h-full" />
    </>
  );
}

export default MyApp;

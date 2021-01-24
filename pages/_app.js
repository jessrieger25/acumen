import "../styles/globals.css";
import { Nav } from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <Component {...pageProps} className="w-full h-full" />
      </div>
    </>
  );
}

export default MyApp;

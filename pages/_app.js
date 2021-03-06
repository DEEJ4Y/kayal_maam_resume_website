import "../styles/bootstrap.min.css";
import "aos/dist/aos.css";
import "animate.css";
import "../styles/globals.css";

import { useEffect } from "react";
import AOS from "aos";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;

import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect } from "react";

import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    // Supprimer les warnings WebGL de Three.js/Spline
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (
        typeof args[0] === "string" &&
        (args[0].includes("THREE.WebGLProgram") ||
          args[0].includes("use of potentially uninitialized variable"))
      ) {
        return;
      }
      originalWarn.apply(console, args);
    };

    return () => {
      console.warn = originalWarn;
    };
  }, []);

  return (
    <div lang={"en"} className={dmSans.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;

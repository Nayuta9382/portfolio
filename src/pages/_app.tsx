import { NavShowIdProvider } from "@/context/NavShowIdContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <NavShowIdProvider>
      <Component {...pageProps} />;
    </NavShowIdProvider>
  );
}

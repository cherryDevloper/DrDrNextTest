import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={8} color="#209cee" />
      <Component {...pageProps} />
    </>
  );
}

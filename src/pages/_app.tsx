import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress height={8} color="#209cee" />
      <Component {...pageProps} />
    </Provider>
  );
}

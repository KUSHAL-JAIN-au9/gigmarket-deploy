import "../globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Head from "next/head";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { StateProvider } from "../context/StateContext";
import reducer, { initialState } from "../context/StateReducers";
import { ToastContainer, toast } from "react-toastify";
import { ToastSucess } from "../utils/Toast";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [cookies] = useCookies();
  useEffect(() => {
    if (
      router.pathname.includes("/seller") ||
      router.pathname.includes("/buyer")
    ) {
      if (!cookies.jwt) {
        router.push("/");
      }
    }
  }, [cookies, router]);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>GigMarket</title>
      </Head>
      <div className="relative flex flex-col h-screen justify-between">
        <Navbar />
        <div
          className={`${
            router.pathname !== "/" ? "mt-36" : ""
          } mb-auto w-full mx-auto`}
        >
          <Component {...pageProps} />
        </div>
        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </StateProvider>
  );
}

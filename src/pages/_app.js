import AppContext from "@context/AppContext";
import Script from "next/script";
import Header from "@components/Header";
import useInitialState from "@hooks/useInitialState";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={InitialState}>
      <Header />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V3LJGT0QF5"
      />
      <Script id="google-analyitics" strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-V3LJGT0QF5');`}
      </Script>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

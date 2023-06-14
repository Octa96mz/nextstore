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
        src="https://www.googletagmanager.com/gtag/js?id=G-LC8PTNEWHD"
      />
      <Script id="google-analyitics" strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-LC8PTNEWHD');`}
      </Script>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

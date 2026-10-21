import Script from "next/script";
import "../styles/globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function MyApp({ Component, pageProps }) {
  return (
    <>
      {GA_ID ? (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');`}
          </Script>
        </>
      ) : null}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

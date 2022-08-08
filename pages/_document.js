import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,200;8..144,300;8..144,400;8..144,500;8..144,600&family=Spectral:ital,wght@1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className=" bg-neutral-100 h-screen
       selection:bg-blue-100/30 selection:text-blue-500"
      >
        <svg
          id="texture"
          width="100%"
          height="100%"
          className="pointer-events-none fixed isolate z-50 opacity-40 mix-blend-soft-light"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.4"
              numOctaves="0.8"
              stitchTiles="stitch"
            ></feTurbulence>
            //https://fecolormatrix.com/
            <feColorMatrix
              className="hidden dark:visible"
              type="saturate"
              values="0"
            ></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

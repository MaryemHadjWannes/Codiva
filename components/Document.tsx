import localFont from "next/font/local";
import { local, type Lang } from "../lib/site";

const handwriting = localFont({
  src: "../app/fonts/Caveat.ttf",
  variable: "--handwriting",
  display: "swap",
});

export function Document({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      data-theme="dark"
      className={handwriting.variable}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href={local("/assets/favicon.svg")}
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href={local("/assets/apple-touch-icon.png")}
        />
        <link rel="manifest" href={local("/site.webmanifest")} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}',
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

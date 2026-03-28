import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klar Digital \u2014 Nettsider som leverer resultater",
  description:
    "Klar Digital hjelper lokale bedrifter med \u00E5 vokse digitalt gjennom profesjonelle nettsider og digital markedsf\u00F8ring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className="h-full antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

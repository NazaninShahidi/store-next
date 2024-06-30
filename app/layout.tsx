import { Suspense } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./globals.css";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-screen-xl mx-auto">
        <Header />
        {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
        {children}

        <Footer />
      </body>
    </html>
  );
}

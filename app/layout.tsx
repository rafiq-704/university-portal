import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Footer from "./components/Foooter";

const calibri = localFont({
  src: "../public/fonts/calibri-regular.ttf",
  display: 'swap',
  variable: "--font-calibri"
})
export const metadata: Metadata = {
  title: "University Portal | Home Page",
  description: "Detail Portal for Students and Companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={calibri.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

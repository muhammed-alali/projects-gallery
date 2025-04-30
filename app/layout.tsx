import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projects Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./Header";
import { SideNav } from "./SideNav";
import { Footer } from "./Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "La recherche au sang | Unucr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[100svh] flex flex-col">
        <Header />
        <div className="flex-grow grid md:grid-cols-[auto,65ch] mx-auto">
          <SideNav />
          <main className="p-4 pb-8">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

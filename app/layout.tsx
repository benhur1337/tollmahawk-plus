import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar, Footer } from "@/components/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tollmahawk Plus",
  description: "Science Based Sports Performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        <div className="flex flex-row justify-center items-center p-6">Tollmahawk Plus ©</div>
      </body>
    </html>
  );
}

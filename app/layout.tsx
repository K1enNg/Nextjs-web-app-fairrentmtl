"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return
  }, [isLoading]) 
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-mtlNeighborhood bg-no-repeat bg-gray-900 bg-opacity-75 flex justify-center items-center text-white py-20 px-10 h-screen bg-cover bg-center`}
      >
        {isLoading ? (
          <div className="absolute inset-0 w-full h-full z-50">
            <SplashScreen finishLoading={() => setIsLoading(false)} />
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <Navbar />
            <main className="relative z-10">{children}</main>
          </>
        )}
      </body>
    </html>
  );
}

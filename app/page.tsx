"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";


export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return
  }, [isLoading]) 
  return (
    <>
      { isLoading && isHome ? (
        <SplashScreen finishLoading={() => setIsLoading(false)}/>
      ): (
        <>
        <Navbar/>
        <Hero/>
        </>
      )}

    </>
  );
}

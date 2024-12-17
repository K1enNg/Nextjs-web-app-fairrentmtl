"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import layout from "@/app/layout"
import Hero from "./components/Hero";


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
      ) : (
        <Hero/>
      )}

    </>
  );
}

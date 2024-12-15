import React, { useEffect, useState } from "react";
import anime from "animejs";
import Image from "next/image";
import Logo from "@/assets/mtl-logo.png";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => {
        finishLoading();
      },
    });

    loader.add({
      targets: ".splash-logo",
      translateX: {
        value: "*=2.5", // 100px * 2.5 = '250px'
        duration: 1000,
      },
      rotate: {
        value: "+=2turn", // Rotate 2 turns
        duration: 1800,
        easing: "easeInOutSine",
      },
      direction: "alternate",
    });

    loader.add({
      targets: ".brand-name h1", 
      width: ["0%", "100%"], 
      opacity: [0, 1],
      easing: "easeOutQuart",
      duration: 2500,
      delay: function (_, i) { return i * 250; },
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    if (isMounted) animate();
    return () => clearTimeout(timeout);
  }, [isMounted]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black">
      <div className="splash-logo">
        <Image src={Logo} alt="Logo" className="h-48 w-48 object-cover" priority />
      </div>
      <div className="brand-name mt-4 overflow-hidden">
        <h1 className="text-white text-5xl font-extrabold font-serif tracking-wide font-playfair">
            MTL
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;

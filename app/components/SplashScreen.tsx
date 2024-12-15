import React, { useEffect, useState } from "react";
import anime from "animejs";
import Image from "next/image";
import Logo from "@/assets/mtl-logo.png";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader.add({
      targets: ".splash-logo",
    translateX: {
        value: '*=2.5', // 100px * 2.5 = '250px'
        duration: 1000
    },
    width: {
        value: '-=20px', // 28 - 20 = '8px'
        duration: 1800,
        easing: 'easeInOutSine'
    },
    rotate: {
        value: '+=2turn', // 0 + 2 = '2turn'
        duration: 1800,
        easing: 'easeInOutSine'
    },
    direction: 'alternate'
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    if (isMounted) animate();
    return () => clearTimeout(timeout);
  }, [isMounted]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="splash-logo">
        <Image src={Logo} alt="Logo" className="h-48 w-48 object-cover" priority/>
      </div>
    </div>
  );
};

export default SplashScreen;

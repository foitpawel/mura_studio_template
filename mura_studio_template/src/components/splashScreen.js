import React, { useState, useEffect } from "react";
import logo from "../images/logos/mura_studio_splash.png";

const SplashScreen = () => {
  const [isAnimatingLogo, setIsAnimatingLogo] = useState(true);
  const [isAnimatingBackground, setIsAnimatingBackground] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setIsAnimatingLogo(false);
      setTimeout(() => {
        setIsAnimatingBackground(true);
      }, 1250);
    }, 250);

    const hideSplashTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(hideSplashTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-all duration-1000 bg-white z-50 ${
        isAnimatingBackground ? "opacity-0 blur-xl scale-125" : "opacity-100 blur-0 scale-200"
      }`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={logo}
          alt="Logo"
          className={`w-[40%] h-auto transition-all duration-1000 ease-out transform ${
            isAnimatingLogo ? "opacity-0 blur-xl scale-125" : "opacity-100 blur-0 scale-100"
          }`}
        />
      </div>
    </div>
  );
};

export default SplashScreen;

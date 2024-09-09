import React from "react";

import Button from "../components/button";
import Logo from "../images/logos/mura_studio_logo.png";

const SuccessScreen = () => {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center text-center justify-center h-screen m-auto">
        <img src={Logo} alt="logo" className="w-1/4 mb-20" />
        <h1 className="font-display lg:text-display-2xl md:text-display-xl text-display-md md:pb-4 pb-2">
          Wiadomość została wysłana!
        </h1>
        <Button link="/" label="STRONA GŁOWNA" size="lg" icon={false} />
      </div>
    </main>
  );
};

export default SuccessScreen;

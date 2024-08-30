import React from "react";
import { Link } from "react-scroll";

import Logo from "../images/logos/mura_studio_logo.jpeg";

const Header = () => {
  const navigation = [
    { name: "O nas", href: "#about" },
    { name: "Usługi", href: "#services" },
    { name: "Portfolio", href: "#works" },
  ];
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  to={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
             spy={true}
             smooth={true}
             duration={500}
             className="text-body-sm font-medium text-neutral-700 hover:text-neutral-700 text-primary-600 px-4"
             to={"#kontakt"}>
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

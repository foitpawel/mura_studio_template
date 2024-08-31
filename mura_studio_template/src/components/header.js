import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";

import Logo from "../images/logos/mura_studio_logo.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const navigation = [
    { name: "O nas", href: "#oNas" },
    { name: "Usługi", href: "#uslugi" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  useEffect(() => {
    console.log("useEffect is running");
  
    let mm = gsap.matchMedia();
  
    mm.add("(min-width: 1024px)", () => {
      console.log("GSAP matchMedia condition met");
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "bottom+=70 top",
          scrub: true,
        }
      });
      
      tl.fromTo(headerRef.current, 
        { y: "0", opacity: 1}, 
        { y: "100%", opacity: 0.5}
      );
    });
  
    return () => mm.revert();
  }, []);
  

  return (
    <header ref={headerRef}>
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
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4 hover:cursor-default"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
             spy={true}
             smooth={true}
             duration={500}
             className="text-body-sm font-medium text-neutral-700 hover:text-neutral-700 text-primary-600 px-4 hover:cursor-default"
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

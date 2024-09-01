import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";

import Logo from "../images/logos/mura_studio_logo.jpeg";

gsap.registerPlugin(ScrollTrigger);

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const closeDropdown = (evt) => {
      if (domNode.current && !domNode.current.contains(evt.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [handler]);

  return domNode;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useClickOutside(() => setIsMenuOpen(false));

  const navigation = [
    { name: "O nas", href: "#oNas" },
    { name: "Usługi", href: "#uslugi" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "bottom+=70 top",
          scrub: true,
        },
      });

      tl.fromTo(
        headerRef.current,
        { y: "0", opacity: 1 },
        { y: "100%", opacity: 0.5 }
      );
    });

    return () => mm.revert();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={headerRef} className="relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-row gap-6 items-center">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-row gap-4 items-center">
              {navigation.slice(0, -1).map((item) => (
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  to={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                spy={true}
                smooth={true}
                duration={500}
                className="text-body-sm font-medium text-primary-600 hover:text-neutral-700 px-4 cursor-pointer"
                to="#kontakt"
              >
                Kontakt
              </Link>
            </div>

            {/* Hamburger Icon */}
            <div
              id="nav-icon"
              className={`lg:hidden relative w-8 h-6 cursor-pointer z-50 ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span className={`block absolute left-0 w-full h-1 ${isMenuOpen ? 'bg-neutral-700' : 'bg-primary-600'} transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'rotate-45 top-[9px]' : 'top-0'}`} />
              <span className={`block absolute left-0 w-full h-1 bg-primary-600 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-[9px]'}`} />
              <span className={`block absolute left-0 w-full h-1 ${isMenuOpen ? 'bg-neutral-700' : 'bg-primary-600'} transition-all duration-300 ease-in-out transform ${isMenuOpen ? '-rotate-45 top-[9px]' : 'top-[18px]'}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 left-1/2 transform -translate-x-1/2 bg-white w-full max-w-[450px] ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col items-center py-8">
          {navigation.map((item, idx) => (
            <Link
              spy={true}
              smooth={true}
              duration={500}
              key={item.name}
              to={item.href}
              className={`text-body-sm font-medium ${idx===3 ? `text-primary-600`: `text-neutral-700`} ${idx===3 ? `hover:text-neutral-700`: `hover:text-primary-600`} py-2 cursor-pointer`}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

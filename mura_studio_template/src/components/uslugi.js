import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DomyJednorodzinne from "../images/service-icons/projektowanie_domow.svg";
import Adaptacje from "../images/service-icons/adaptacje.svg";
import Wielorodzinne from "../images/service-icons/wielorodzinne.svg";
import Przebudowa from "../images/service-icons/przebudowa.svg";
import Uslugowe from "../images/service-icons/uslugowe.svg";
import ZmianaSposobu from "../images/service-icons/zmiana_sposobu.svg";
import Elewacje from "../images/service-icons/elewacje.svg";
import Wnetrza from "../images/service-icons/wnetrza.svg";
import MalaArchitektura from "../images/service-icons/mala_architektura.svg";
import Naglowek from "./naglowek";
import Usluga from "./usluga";

gsap.registerPlugin(ScrollTrigger);

const Uslugi = () => {
  const serviceRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
  
    mm.add("(min-width: 1024px)", () => {
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top",
          end: "bottom top",
          scrub: true,
        }
      });
      
      tl.fromTo(serviceRef.current, 
        { y: "0%",}, 
        { y: "0%"}
      );
    });
  
    return () => mm.revert();
  }, []);

  return (
    <div id="#uslugi" ref={serviceRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Naglowek label="USŁUGI" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                Lorem ipsum dolor <span className="italic">sit amet</span>{" "}
                consectetur adipiscing elit.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Usluga
              icon={DomyJednorodzinne}
              title="Projektowanie domów jednorodzinnych"
            />
            <Usluga
              icon={Adaptacje}
              title="Adaptacje domów jednorodzinnych"
            />
            <Usluga
              icon={Przebudowa}
              title="Przebudowa / rozbudowy budynków"
            />
            <Usluga
              icon={Wielorodzinne}
              title="Budynki wielorodzinne"
            />
            <Usluga
              icon={Uslugowe}
              title="Budynki usługowe"
            />
            <Usluga
              icon={ZmianaSposobu}
              title="Zmiana sposobu uzytkowania"
            />
            <Usluga
              icon={Elewacje}
              title="Projekty elewacji"
            />
            <Usluga
              icon={Wnetrza}
              title="Projekty wnętrz"
            />
            <Usluga
              icon={MalaArchitektura}
              title="Projekty małej architektury"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uslugi;

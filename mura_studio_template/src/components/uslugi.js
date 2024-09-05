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
  
    mm.add("(min-width: 324px)", () => {
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top",
          end: "bottom 120%",
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


  useEffect(() => {
    let mm = gsap.matchMedia();
  
    mm.add("(min-width: 324px)", () => {
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "bottom 30%",
          end: "bottom 10%",
          scrub: true,
        }
      });
      
      tl.fromTo(
        serviceRef.current,
        {
          y: "0%",
          opacity: 1, 
        },
        {
          y: "-10%",
          opacity: 0,
          duration: 1,
        }
      );
    });
  
    return () => mm.revert();
  }, []);

  

  return (
    <div id="#uslugi" ref={serviceRef}>
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-10">
              <Naglowek label="USŁUGI" />
              <h2 className="font-display xl:text-display-lg text-display-md pt-5">
                Naszą misją jest {" "}<span className="italic">tworzenie kompleksowych projektów </span>
              </h2>
              <div className="mt-5">
                <a className="font-display text-neutral-700 md:text-display-xxs text-display-xs">
                  z zakresu architektury kubaturowej oraz wnętrz, które spełnią oczekiwania nawet najbardziej wymagających inwestorów.
                </a>
              </div>
              <div className="mt-5">
                <a className="font-display text-neutral-700 md:text-display-xxs text-display-xs">
                  W skład zakresu naszych usług wchodzą:
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4 md:w-3/4 w-3/4 justify-center mx-auto">
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

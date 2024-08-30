import React from "react";

import DomyJednorodzinne from "../images/service-icons/projektowanie_domow.svg";
import Adaptacje from "../images/service-icons/adaptacje.svg";
import Wielorodzinne from "../images/service-icons/wielorodzinne.svg";
import Przebudowa from "../images/service-icons/przebudowa.svg";
import Uslugowe from "../images/service-icons/uslugowe.svg";
import ZmianaSposobu from "../images/service-icons/zmiana_sposobu.svg";
import Elewacje from "../images/service-icons/elewacje.svg";
import Wnetrza from "../images/service-icons/wnetrza.svg";
import MalaArchitektura from "../images/service-icons/mala_architektura.svg";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <div id="#services">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="USŁUGI" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                Lorem ipsum dolor <span className="italic">sit amet</span>{" "}
                consectetur adipiscing elit.
              </h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <ServiceItem
              icon={DomyJednorodzinne}
              title="Projektowanie domów jednorodzinnych"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={Adaptacje}
              title="Adaptacje domów jednorodzinnych"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={Przebudowa}
              title="Przebudowa / rozbudowy budynków"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={Wielorodzinne}
              title="Budynki wielorodzinne"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={Uslugowe}
              title="Budynki usługowe"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={ZmianaSposobu}
              title="Zmiana sposobu uzytkowania"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={Elewacje}
              title="Projekty elewacji"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={Wnetrza}
              title="Projekty wnętrz"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={MalaArchitektura}
              title="Projekty małej architektury"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;

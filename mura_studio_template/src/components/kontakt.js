import React from "react";

const Kontakt = () => {
  return (
    <div id="#kontakt">
      <div className="container mx-auto">
        <div className="mt-2 md:mb-20 mb-10" />
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12">
          <div className="lg:col-span-6 md:pr-24">
            <h3 className="font-display md:text-display-lg text-display-sm font-normal pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <a
              href="/"
              className="font-display md:text-display-lg text-display-sm italic text-primary-600 underline">
              Lorem ipsum dolor
            </a>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 xl:pl-80 lg:pl-48">
            <div className="flex flex-col gap-2">
              <p className="text-display-xs font-display font-normal">
                44-144 Żernica,<br/>ul. Brzozowa
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                Email
              </p>
              <a
                className="text-display-xs font-display font-normal text-primary-600"
                href="mailto:biuro@murastudio.pl">
                biuro@murastudio.pl
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                Telefon
              </p>
              <a
                className="text-display-xs font-display font-normal text-primary-600"
                href="/">
                +48 795 504 238
              </a>
            </div>
          </div>
        </div>
        <div className="mt-2 md:mb-20 mb-10" />
      </div>  
    </div>
  );
};

export default Kontakt;

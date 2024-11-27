import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Element } from "react-scroll";

import Formularz from "./formularz";

const Kontakt = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const kontaktRef = useRef(null);

  const data = useStaticQuery(graphql`
    {
      allSocialJson {
        nodes {
          id
          name
          href
          icon {
            publicURL
          }
        }
      }
    }
  `);

  useEffect(() => {
    const handleScroll = () => {
      if (!kontaktRef.current) return;

      const bounding = kontaktRef.current.getBoundingClientRect();

      if (bounding.top <= window.innerHeight * 0.75) {
        setHasAnimated(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Element name="kontakt">
    <div ref={kontaktRef} className="container mx-auto p-5 overflow-hidden">
      <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12">
        <div className="lg:col-span-6 m-auto w-full max-w-lg">
          <div
            className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-500 transform ${
              hasAnimated ? "translate-x-0 opacity-100 delay-100" : "-translate-x-full opacity-0"
            }`}
          >
            <Formularz />
          </div>
        </div>
        <div className="lg:col-span-6 mt-2 flex flex-col gap-8 xl:pl-auto lg:pl-auto items-end text-right">
          <div
            className={`flex flex-col gap-2 mt-10 transition-all duration-500 transform origin-right ${
              hasAnimated ? "translate-x-0 opacity-100 delay-200" : "translate-x-10 opacity-0"
            }`}
          >
            <p className="font-body text-body-lg text-display-xs text-neutral-700">
              ul. Brzozowa 3a<br />44-144 Żernica k. Gliwic
            </p>
          </div>
          <div
            className={`flex flex-col gap-2 mt-2 transition-all duration-500 transform origin-right ${
              hasAnimated ? "translate-x-0 opacity-100 delay-300" : "translate-x-10 opacity-0"
            }`}
          >
            <a
              className="text-display-xs font-body text-body-lg text-primary-600 hover:text-neutral-700"
              href="mailto:biuro@murastudio.pl"
            >
              biuro@murastudio.pl
            </a>
          </div>
          <div
            className={`flex flex-col gap-2 mt-2 transition-all duration-500 transform origin-right ${
              hasAnimated ? "translate-x-0 opacity-100 delay-500" : "translate-x-10 opacity-0"
            }`}
          >
            <a
              className="text-display-xs font-body text-body-lg text-primary-600 hover:text-neutral-700"
              href="tel:+48795504238"
            >
              +48 795 504 238
            </a>
          </div>
          <div
            className={`flex flex-col gap-2 transition-all duration-500 transform ${
              hasAnimated ? "translate-x-0 opacity-100 delay-700" : "translate-x-full opacity-0"
            }`}
          >
            <div className="flex flex-row items-center gap-6 mt-5 justify-end">
              {data.allSocialJson.nodes.map((node) => (
                <a
                  href={node.href}
                  key={node.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-10 w-10"
                    src={node.icon.publicURL}
                    alt={node.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 md:mb-20 mb-10"></div>
    </div>
  </Element>
    );
};

export default Kontakt;

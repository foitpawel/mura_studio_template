import React, {useEffect, useRef} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Eyebrow from "./eyebrow";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
  
    mm.add("(min-width: 1024px)", () => {
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top",
          end: "bottom top",
          scrub: true,
        }
      });
      
      tl.fromTo(aboutRef.current, 
        { y: "0%",}, 
        { y: "0%"}
      );
    });
  
    return () => mm.revert();
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();
  
    mm.add("(min-width: 1024px)", ()  => {
      gsap.timeline({
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: "top 180%",
          end: "top 80%",
          scrub: true, 
        }
      })
      .fromTo(leftImageRef.current, { y: "100%"}, { y: "0%" })
      .fromTo(rightImageRef.current, { y: "-65%", opacity: 0.3}, { y: "0%", opacity: 1}, 0);
    });
  
    return () => mm.revert();
  }, []);

  const data = useStaticQuery(graphql`
    {
      prawy: file(relativePath: { eq: "prawy.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 296
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      lewy: file(relativePath: { eq: "lewy.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 296
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <div id="#about" ref={aboutRef}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="O NAS" />
            <h2 className="font-display md:text-display-xl text-display-md pt-5">
                Mura studio zajmuje się  <span className="italic">projektowaniem obiektów</span>{" "} kubaturowych,
            </h2>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              ale również aranżacją wnętrz oraz grafiką i tworzeniem multimediów.
              Nie boimy się nowych wyzwań. Nasze projekty charakteryzują się
              indywidualnym podejściem oraz dbałością o każdy szczegół.
            </p>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              Najważniejszym etapem pracy jest poznanie potrzeb klienta i
              konsekwentne budowanie projektu z troską zarówno o jego wartości
              techniczne jak i estetyczne - materiał, światło, kolor.
              Doświadczenie i ciągły rozwój to gwarancja unikalnego efektu naszej pracy.
            </p>
          </div>
          {/* <div className="lg:col-span-6 flex flex-col gap-8 relative"> */}
            {/* <GatsbyImage
              className="h-full transform translate-y-full transition-transform duration-3000"
              image={getImage(data.aboutimage)}
              alt="Interior Design"
            /> */}
            <div className="lg:col-span-6 flex flex-col gap-8 relative">
              <div className="flex justify-between">
                <div ref={leftImageRef} className="w-1/2">
                  <GatsbyImage className="h-full transform transition-transform" image={getImage(data.lewy)} alt="Interior Design" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
                </div>
                <div ref={rightImageRef} className="w-1/2">
                  <GatsbyImage className="h-full transform transition-transform" image={getImage(data.prawy)} alt="Interior Design" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
                </div>
            </div>
          {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, {useEffect, useRef} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Karuzela from "./karuzela";
import Naglowek from "./naglowek";

gsap.registerPlugin(ScrollTrigger);

const ONas = () => {
  const oNasRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  // useEffect(() => {
  //   let mm = gsap.matchMedia();
  
  //   mm.add("(min-width: 324px)", () => {
  
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: oNasRef.current,
  //         start: "top 80%",
  //         end: "bottom 50%",
  //         scrub: true,
  //         markers: true,
  //       }
  //     });
      
  //     tl.fromTo(
  //       oNasRef.current,
  //       {
  //         y: "10%",
  //         opacity: 0, 
  //       },
  //       {
  //         y: "0%",
  //         opacity: 0,
  //         duration: 1,
  //       }
  //     );
  //   });
  
  //   return () => mm.revert();
  // }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();
  
    mm.add("(min-width: 324px)", ()  => {
      gsap.timeline({
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: "top 150%",
          end: "top 75%",
          scrub: true, 
        }
      })
      .fromTo(leftImageRef.current, { y: "100%"}, { y: "0%" })
      .fromTo(rightImageRef.current, { y: "-65%", opacity: 0}, { y: "0%", opacity: 1}, 0);
    });
  
    return () => mm.revert();
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();
  
    mm.add("(min-width: 324px)", () => {
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: oNasRef.current,
          start: "bottom 30%",
          end: "bottom 5%",
          scrub: true,
        }
      });
      
      tl.fromTo(
        oNasRef.current,
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
    <div id="#oNas" ref={oNasRef}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 items-center pt-10">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Naglowek label="O NAS" />
            <h2 className="font-body xl:text-display-lg text-display-md">
                Mura studio zajmuje się  <span className="italic">projektowaniem obiektów</span>{" "} kubaturowych,
            </h2>
            <p className="font-body text-body-lg text-center font-light text-neutral-700">
              ale również aranżacją wnętrz oraz grafiką i tworzeniem multimediów.
              Nie boimy się nowych wyzwań. Nasze projekty charakteryzują się
              indywidualnym podejściem oraz dbałością o każdy szczegół.
            </p>
            <p className="font-body text-body-lg text-center font-light text-neutral-700">
              Najważniejszym etapem pracy jest poznanie potrzeb klienta i
              konsekwentne budowanie projektu z troską zarówno o jego wartości
              techniczne jak i estetyczne - materiał, światło, kolor.
              Doświadczenie i ciągły rozwój to gwarancja unikalnego efektu naszej pracy.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative  mx-auto mb-10">
            <div className="flex justify-between">
              <div ref={leftImageRef} className="w-1/2">
                <GatsbyImage className="h-full transform transition-transform" image={getImage(data.lewy)} alt="Interior Design" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
              </div>
              <div ref={rightImageRef} className="w-1/2">
                <GatsbyImage className="h-full transform transition-transform" image={getImage(data.prawy)} alt="Interior Design" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
              </div>
          </div>
          </div>
        </div>
        <p className="font-body text-body-lg text-center font-light text-neutral-700 mt-5 mb-10">
          Przy realizacji inwestycji budowlanych współpracujemy ze stałym zespołem zaufanych branżystów z zakresu instalacji sanitarnych, instalacji elektrycznych oraz konstrukcji. Dzięki temu jesteśmy w stanie dostarczyć Państwu projekty wielobranżowe na wysokim poziomie dopracowania.
        </p>
        <Karuzela />
      </div>
    </div>
  );
};

export default ONas;

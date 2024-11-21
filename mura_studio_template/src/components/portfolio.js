import React, {useEffect, useRef} from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PortfolioElement from "./portfolioElement";
import Naglowek from "./naglowek";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const data = useStaticQuery(graphql`
    {
      allWorksJson {
        nodes {
          id
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 592
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    let mm = gsap.matchMedia();
  
    mm.add("(min-width: 324px)", () => {
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "bottom 60%",
          end: "bottom 10%",
          scrub: true,
        }
      });
      
      tl.fromTo(
        portfolioRef.current,
        {
          y: "0%",
          opacity: 1, 
        },
        {
          y: "-10%",
          opacity: 0,
        }
      );
    });
  
    return () => mm.revert();
  }, []);


  return (
    <div id="#portfolio" ref={portfolioRef}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
              <div className="flex flex-col gap-6">
                <Naglowek label="PORTFOLIO" />
                <h3 className="md:text-display-lg text-display-md font-body pb-4">
                  <span className="italic">Zapraszamy</span> do zapoznania się z naszymi wcześniejszymi pracami
                </h3>
              </div>
              {data.allWorksJson.nodes
                .filter((_, idx) => [0,3,6].includes(idx))
                .map((node) => (
                  <PortfolioElement
                    key={node.id}
                    title={node.title}
                    image={getImage(node.image)}
                  />
              ))}
            </div>
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
              {data.allWorksJson.nodes
                .filter((_, idx) => [1,2,4,5].includes(idx))
                .map((node) => (
                  <PortfolioElement
                    key={node.id}
                    image={getImage(node.image)}
                    title={node.title}
                    description={node.description}
                    direction="right"
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React, {useEffect, useRef} from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WorkItem from "./workItem";
import Eyebrow from "./eyebrow";

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

  // useEffect(() => {
  //   let mm = gsap.matchMedia();
  
  //   mm.add("(min-width: 1024px)", () => {
  
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: portfolioRef.current,
  //         start: "top 300%",
  //         end: "top 100%",
  //         scrub: true,
  //         // markers: true
  //       }
  //     });
      
  //     tl.fromTo(portfolioRef.current, 
  //       { y: "0%",}, 
  //       { y: "-300%"}
  //     );
  //   });
  
  //   return () => mm.revert();
  // }, []);


  return (
    <div id="#portfolio" ref={portfolioRef}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
              <div className="flex flex-col gap-6">
                <Eyebrow label="PORTFOLIO" />
                <h3 className="font-display md:text-display-xl text-display-md font-normal pb-4">
                Lorem ipsum <span className="italic">dolor</span> sit amet, consectetur
                </h3>
              </div>
              {data.allWorksJson.nodes.slice(0, 1).map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
            </div>
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
              {data.allWorksJson.nodes.slice(1, 3).map((node) => (
                <WorkItem
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

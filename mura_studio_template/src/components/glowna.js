import React, { useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../images/movie.mp4";


gsap.registerPlugin(ScrollTrigger);

const Glowna = () => {
  const glownaRef = useRef(null);

  const data = useStaticQuery(graphql`
    {
      heroimage: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 5120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  
  useEffect(() => {
    let mm = gsap.matchMedia();
  
    mm.add("(min-width: 320px)", () => {
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: glownaRef.current,
          start: "top -20%",
          end: "bottom top",
          scrub: true,
        }
      });
      
      tl.fromTo(glownaRef.current, 
        { y: "0%", opacity: 1}, 
        { y: "-60%", opacity: 0}//
      );
    });
  
    return () => mm.revert();
  }, []);

  return (
    <div>
      <div ref={glownaRef} className="relative z-30">
      <video width="100%" height="100vh"  preload='auto' loop autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
        {/* <GatsbyImage image={getImage(data.heroimage)} alt="Interior Design" /> */}
        {/* pytanie, czy potrzeba */}
        {/* <a href="/">
          <img
            src={CtaButton}
            alt="Get in touch"
            className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
          />
        </a> */}
      </div>
    </div>
  );
};

export default Glowna;

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioElement = ({ image, title}) => {
  const itemRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 320px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 100%",
          end: "top 50%",
          scrub: true,
        },
      });

      tl.fromTo(
        imageRef.current,
        {
          y: "80%",
          opacity: 0, 
        },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={itemRef} className="flex basis-1/2 flex-col overflow-hidden z-100">
      <div ref={imageRef} className="md:mx-auto">
        <GatsbyImage image={image} alt={title} />
      </div>
    </div>
  );
};

PortfolioElement.propTypes = {
  image: PropTypes.object.isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
};

export default PortfolioElement;

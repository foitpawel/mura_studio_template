import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkItem = ({ image, title, description, direction = "left" }) => {
  const itemRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const xStart = direction === "left" ? "-100%" : "100%";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: itemRef.current,
          start: direction === "left" ? "top 80%" : "top 60%",
          end: "top 20%",
          scrub: true,
        },
      });

      tl.fromTo(
        imageRef.current,
        {
          x: xStart,
          y: direction === "left" ? '150%' : '150%',
          opacity: 0, 
        },
        {
          x: "0%",
          y: direction === "left" ? '0%' : '0%',
          opacity: 1,
          duration: 1,
        }
      );

      tl.fromTo(
        textRef.current,
        {
          x: xStart,
          opacity: 0,
          y: direction === "left" ? '50%' : '50%',

        },
        {
          x: "0%",
          opacity: 1,
          y: direction === "left" ? '0%' : '0%',
          duration: 1,
        },
        "-=0.5"
      );
    });

    return () => mm.revert();
  }, [direction]);

  return (
    <div ref={itemRef} className="flex basis-1/2 flex-col overflow-hidden z-100">
      <div ref={imageRef}>
        <GatsbyImage image={image} alt={title} />
      </div>
      <div ref={textRef} className="flex flex-col self-stretch pt-6">
        <h3 className="font-display text-display-md pb-4">{title}</h3>
        <p className="text-body-lg font-light text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
};

WorkItem.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
};

export default WorkItem;

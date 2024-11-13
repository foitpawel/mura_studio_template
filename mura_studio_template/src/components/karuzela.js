import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Karuzela = () => {
  const containerRef = useRef(null);

  const data = useStaticQuery(graphql`
    {
      GrafLogo: file(relativePath: { eq: "logos/GrafLogo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 170
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }

      JacekJamrozLogo: file(relativePath: { eq: "logos/JacekJamrozLogo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      MediumSquareLogo: file(relativePath: { eq: "logos/MediumSquareLogo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 170
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  useEffect(() => {
    const container = containerRef.current;
    const scrollSpeed = 1;
    let startPosition = 0;

    const scroll = () => {
      startPosition += scrollSpeed;
      container.scrollLeft = startPosition;

      if (startPosition >= container.scrollWidth / 2) {
        startPosition = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <div className="flex flex-col md:gap-20 gap-10">
      <div className="relative overflow-hidden h-[200px] bg-white">
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <div
          ref={containerRef}
          className="flex w-[200%] animate-marquee"
        >
          <div className="flex w-[50%]">
            <GatsbyImage className="mx-auto" image={getImage(data.GrafLogo)} alt="Logo 1" />
            <GatsbyImage className="mx-auto" image={getImage(data.MediumSquareLogo)} alt="Logo 2" />
            <GatsbyImage className="mx-auto" image={getImage(data.JacekJamrozLogo)} alt="Logo 3" />
          </div>
          <div className="flex w-[50%]">
            <GatsbyImage className="mx-auto" image={getImage(data.GrafLogo)} alt="Logo 5" />
            <GatsbyImage className="mx-auto" image={getImage(data.MediumSquareLogo)} alt="Logo 6" />
            <GatsbyImage className="mx-auto" image={getImage(data.JacekJamrozLogo)} alt="Logo 7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karuzela;

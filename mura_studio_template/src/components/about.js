import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Eyebrow from "./eyebrow";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutimage: file(relativePath: { eq: "about-creative.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 592
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div id="#about">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="O NAS" />
            <h2 className="font-display md:text-display-xl text-display-md pt-5">
                Lorem ipsum dolor <span className="italic">sit amet</span>{" "}
                consectetur adipiscing elit.
            </h2>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
              mauris posuere auctor justo. Habitant proin aliquet volutpat leo
              ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc.
              Faucibus sit odio bibendum lobortis diam.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative">
            <GatsbyImage
              image={getImage(data.aboutimage)}
              alt="Interior Design"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

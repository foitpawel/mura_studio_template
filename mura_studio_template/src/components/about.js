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

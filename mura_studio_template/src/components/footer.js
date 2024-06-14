import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allSocialJson {
        nodes {
          id
          name
          href
          icon {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <footer>
      <div className="container mx-auto">
        <div className="mt-2 md:mb-20 mb-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:items-center justify-between md:mb-20 mb-10">
          <div className="text-body-md font-light">
            © {new Date().getFullYear()} Mura studio. Made with
            love by Pawel Foit
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center md:gap-6 gap-4">
            <div className="flex flex-row items-center opacity-70">
              <p className="text-body-sm font-semibold tracking-widest text-neutral-700 pr-4">
                CONNECT
              </p>
              <hr className="w-16 text-neutral-700"></hr>
            </div>
            <div className="flex flex-row  items-center gap-6">
              {data.allSocialJson.nodes.map((node) => (
                <a
                  href={node.href}
                  key={node.name}
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="h-10 w-10"
                    src={node.icon.publicURL}
                    alt={node.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

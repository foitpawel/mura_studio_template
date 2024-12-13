import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const previewImage = "https://murastudio.netlify.app/images/OpenGl.jpg"

function Seo({ lang, meta, title, description, image, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
          }
        }
      }
    `
  );

  const siteTitle = title || site.siteMetadata.title || "Mura studio";
  const metaDescription = description || site.siteMetadata.description;
  const siteUrl = site.siteMetadata.siteUrl;
  const ogImage = image || previewImage;
  const ogUrl = url ? `${siteUrl}/${url}` : siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: `design, architecture, interior, interior design, buildings, project, visualizations, architektura, wnetrza, projekty wnetrz, budynki jednorodzinne, projekt przebudowy, przebudowa,`,
        },
        {
          property: `og:image`,
          content: ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: ogUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:image`,
          content: ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`,
        },
        {
          name: `twitter:title`,
          content: title || siteTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].filter(item => item.content)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default Seo;

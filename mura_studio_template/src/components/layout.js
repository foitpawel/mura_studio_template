import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  const title = "Mura studio";
  const description = "Projekty budynków i wnętrz";
  const image = "https://murastudio.netlify.app/static/OpenGl-06ed6f16cdf48a64b1f791940ee1b9cc.png";
  const url = "https://murastudio.netlify.app";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <script src="https://gumroad.com/js/gumroad.js" />
        <meta name="description" content={description} />
        <meta property="fb:app_id" content="YOUR_APP_ID" /> {/*add app id*/}

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta property="twitter:domain" content="murastudio.netlify.app" />
        <meta property="twitter:url" content={url} />
      </Helmet>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

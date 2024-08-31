import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Mura studio</title>
      <script src="https://gumroad.com/js/gumroad.js" />
      <meta property="og:url" content="https://murastudio.netlify.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mura studio" />
      <meta property="og:description" content="Projekty budynków i wnętrz" />
      <meta property="og:image" content="https://murastudio.netlify.app/static/OpenGl-06ed6f16cdf48a64b1f791940ee1b9cc.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mura studio" />
      <meta name="twitter:image" content="https://murastudio.netlify.app/static/OpenGl-06ed6f16cdf48a64b1f791940ee1b9cc.png" />
      <meta property="twitter:domain" content="murastudio.netlify.app" />
      <meta property="twitter:url" content="https://murastudio.netlify.app" />
      <meta name="twitter:description" content="Projekty domów i nie tylko" />
      <meta name="description" content="Projekty budynków i wnętrz" />
    </Helmet>
    <Header />
    <div>
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <script src="https://gumroad.com/js/gumroad.js" />
      <meta property="og:image" content={"https://murastudio.netlify.app/static/images/OpenGl.png"} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:title" content="Mura studio" />
      <meta property="og:description" content="Projekty domów i nie tylko" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tytuł Twojej Strony" />
      <meta name="twitter:description" content="Projekty domów i nie tylko" />
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

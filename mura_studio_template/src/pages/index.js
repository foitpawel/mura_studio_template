import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Kontakt from "../components/kontakt";
import Metrics from "../components/metrics";
import Services from "../components/services";
import About from "../components/about";
import Portfolio from "../components/portfolio";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <About />
    {/* <Metrics /> */}
    <Services />
    <Portfolio />
    <Kontakt />
  </Layout>
);

export default IndexPage;

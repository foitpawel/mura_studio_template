import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Kontakt from "../components/kontakt";
import Metrics from "../components/metrics";
import Services from "../components/services";
import About from "../components/about";
import Works from "../components/works";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <About />
    {/* <Metrics /> */}
    <Services />
    <Works />
    <Kontakt />
  </Layout>
);

export default IndexPage;

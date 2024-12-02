import React from "react";

import Glowna from "../components/glowna";
import Kontakt from "../components/kontakt";
import Layout from "../components/layout";
import ONas from "../components/oNas";
import Portfolio from "../components/portfolio";
import SplashScreen from "../components/splashScreen";
import Seo from "../components/seo";
import Uslugi from "../components/uslugi";

const IndexPage = () => (
  <Layout>
    <SplashScreen />
    <Seo />
    <Glowna />
    <ONas />
    <Uslugi />
    <Portfolio />
    <Kontakt />
  </Layout>
);

export default IndexPage;

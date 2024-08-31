import React from "react";

import Button from "../components/button";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="Page Not Found" />
      <main className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:py-28 md:py-20 py-16">
          <h1 className="font-display lg:text-display-2xl md:text-display-xl text-display-md md:pb-4 pb-2">
            Nie znaleziono strony
          </h1>
          <p className="md:text-body-lg text-body-md pb-10 text-neutral-700">
            Strona której szukasz nie istnieje.
          </p>
          <Button link="/" label="STRONA GŁOWNA" size="lg" icon={false} />
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;

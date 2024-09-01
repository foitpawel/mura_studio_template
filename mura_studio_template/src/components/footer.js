import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="mt-2 md:mb-10 mb-5">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:items-center justify-between md:mb-10 mb-5">
          <div className="text-body-md font-light">
            © {new Date().getFullYear()} Mura studio. Made by Pawel Foit
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

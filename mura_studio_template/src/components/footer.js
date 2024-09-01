import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="mx-8">
        <hr className="text-neutral-300" />
        <div className="flex lg:flex-row flex lg:items-center md:mb-0 sm:mb-0">
          <div className="text-body-md font-light flex items-center lg:ml-4 ml-2 mt-5">
            © {new Date().getFullYear()} Mura studio. Made by Pawel Foit
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

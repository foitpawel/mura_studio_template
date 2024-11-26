import React from "react";

const Footer = () => {
  return (
    <footer className="flex mx-8 items-center justify-center text-center p-4 bg-gray-800 text-white border-t-2 border-neutral-400">
      <p className="text-sm md:text-base text-neutral-500 mx-auto">
        Copyright © {new Date().getFullYear()} Mura studio | Created by Pawel Foit
      </p>
    </footer>
  );
};

export default Footer;

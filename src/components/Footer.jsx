import React from "react";

const Footer = () => {
  const getYear = () => new Date().getFullYear();

  return (
    <footer className=" flex px-4 md:px-32 py-7.5 bg-base-100  text-base-content/70 justify-between">
      <div>
        <p className="text-sm">
          © {getYear()} <span className="font-bold">Alvian Nugroho</span> -
          Software Engineer. Built with{" "}
          <span className="text-pink-500"> ♥</span> and lots of coffee.
        </p>
      </div>
      <div className="flex gap-3">
        <a href="#about" className="hover:text-primary">
          About
        </a>
        <a href="#project" className="hover:text-primary">
          Portfolio
        </a>
        <a href="#skill" className="hover:text-primary">
          Skills
        </a>
      </div>
    </footer>
  );
};

export default Footer;

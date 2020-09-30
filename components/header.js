import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const logo = require("../images/deepsat_logo.png?resize");

export default function Header({ links }) {
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const current = window.scrollY < 5;
      if (current !== top) {
        setTop(current);
      }
    });
  });

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`fixed z-50 top-0 w-full transition-default ${
        top ? "menu-top" : "menu"
      }`}
    >
      <div
        className={`container mx-auto h-24 px-16 md:px-32 flex flex-wrap items-center`}
      >
        <Link href="/">
          <a className=" mr-8 brand">
            <h1 className="text-4xl">
              DeepSat
              <img
                src={logo}
                srcSet={logo.srcSet}
                className="logo"
              />
            </h1>
          </a>
        </Link>
        <button
          aria-label="menu"
          onClick={toggle}
          className="w-4 h-4 ml-auto md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          aria-hidden={!open}
          className={`absolute md:static inset-x-0 top-full md:ml-auto bg-white md:bg-transparent shadow-lg md:shadow-none transition-default md:transition-none transform md:transform-none origin-top ${
            open ? "" : "scale-y-0 "
          }`}
        >
          <ul
            className={`container mx-auto flex flex-col md:flex-row gap-8 px-16 py-8 md:p-0 text-primary md:text-current`}
          >
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>
                  <a className="whitespace-no-wrap">{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const logo = require("../images/logo_horizontal.png?resize");

export default function Header({ links }) {
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let onscroll = () => {
      const current = window.scrollY < 5;
      if (current !== top) {
        setTop(current);
      }
    };
    document.addEventListener("load", onscroll);
    document.addEventListener("scroll", onscroll);
  });

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className={`header ${top ? "isTop" : ""}`}>
      <div
        className={`container mx-auto h-24 px-16 md:px-32 flex flex-wrap justify-center items-center`}
      >
        <div className="mr-auto">
          <Link href="/">
            <a>
              <img
                src={logo}
                srcSet={logo.srcSet}
                className="logo h-8 md:h-10 align-baseline"
              />
            </a>
          </Link>
        </div>
        <button
          aria-label="menu"
          onClick={toggle}
          className="md:hidden menu-toggle"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          aria-hidden={!open}
          className={`absolute md:static md:ml-auto inset-x-0 top-full bg-white md:bg-transparent shadow-lg md:shadow-none transition-default md:transition-none transform md:transform-none origin-top ${
            open ? "" : "scale-y-0 "
          }`}
        >
          <ul
            className={`container mx-auto flex flex-col md:flex-row gap-8 px-16 py-8 md:p-0`}
          >
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>
                  <a className="whitespace-no-wrap link">{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

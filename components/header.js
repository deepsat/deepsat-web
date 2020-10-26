import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
const logo = require("../images/logo_horizontal.png?resize");

export default function Header({ menu }) {
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
          <img
            src={logo}
            srcSet={logo.srcSet}
            className="logo h-8 md:h-10 align-baseline"
          />
        </div>
        <button
          aria-label="menu"
          onClick={toggle}
          className="md:hidden menu-toggle"
        >
          <MdMenu></MdMenu>
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
            {menu.map((item) => (
              <li key={item.label}>
                <Link href={item.url}>
                  <a className="whitespace-no-wrap link">{item.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

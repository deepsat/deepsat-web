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
    <div className={`header h-24 ${top ? "isTop" : ""}`}>
      <div
        className={`container mx-auto h-full px-16 lg:px-32 flex flex-wrap justify-center items-center`}
      >
        <div className="mr-auto">
          <img src={logo} srcSet={logo.srcSet} className="logo" />
        </div>
        <button
          aria-label="menu"
          onClick={toggle}
          className="lg:hidden menu-toggle"
        >
          <MdMenu></MdMenu>
        </button>
        <div className={"menu"}>
          <ul className="container">
            {menu.map((item) => (
              <li key={item.label}>
                <Link href={item.url}>
                  <a className="whitespace-no-wrap link">{item.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          aria-hidden={!open}
          className={`menu-mobile ${open ? "" : "scale-y-0 "}`}
        >
          <ul className="container">
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

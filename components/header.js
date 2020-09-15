import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

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
          <a className="text-4xl mr-8 brand">
            <h1>DeepSat</h1>
          </a>
        </Link>
        <button onClick={toggle} className="w-4 h-4 ml-auto md:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul
          aria-hidden={!open}
          className={`absolute top-full inset-x-0 md:static transition-default md:transition-none transform md:transform-none origin-top ${
            open ? "" : "scale-y-0 "
          } flex  flex-col px-16 py-8 md:p-0 bg-white shadow-lg md:shadow-none text-primary md:bg-transparent md:text-current md:flex-row md:ml-auto gap-8 md:w-auto`}
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
  );
}

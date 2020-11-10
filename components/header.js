import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { useRouter } from "next/router";
const logo = require("../images/logo_horizontal.png?resize");

const MenuItem = ({ locale, href, label }) => (
  <li key={href}>
    <Link href={href} locale={locale}>
      <a className="whitespace-no-wrap link">{label}</a>
    </Link>
  </li>
);
MenuItem.defaultProps = {
  href: "",
  label: "",
};

const LanguageSwitcher = () => {
  const router = useRouter();
  // console.log(router);
  return router.locales.map((locale) =>
    locale == router.locale ? null : (
      <Link href={`/${locale}`} locale={locale} scroll={false}>
        <a className="link">{locale.toLocaleUpperCase()}</a>
      </Link>
    )
  );
};

export default function Header({ menu }) {
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let onscroll = () => {
      const current = window.scrollY < 10;
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
        className={`container mx-auto h-full px-16 lg:px-32 flex justify-center items-center`}
      >
        <div className="mr-auto">
          <Link href="/">
            <a className="logo">
              <img src={logo} srcSet={logo.srcSet} />
            </a>
          </Link>
        </div>
        <button
          aria-label="menu"
          onClick={toggle}
          className="lg:hidden menu-mobile-toggle"
        >
          <MdMenu></MdMenu>
        </button>
        <div className={"menu"}>
          <ul className="container">
            {menu.map((item) => (
              <MenuItem {...item} />
            ))}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
        <div
          aria-hidden={!open}
          className={`menu-mobile ${open ? "" : "scale-y-0 "}`}
        >
          <ul className="container">
            {menu.map((item) => (
              <MenuItem {...item} />
            ))}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

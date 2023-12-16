import { useState } from "react";
import styles from "../assets/styles/animations.module.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import MobileLogo from "./MobileLogo";

import MobileHomeLogo from "../assets/images/MobileHomeLogo.png";
import MobileProjectLogo from "../assets/images/MobileProjectLogo.png";
import MobileGalleryLogo from "../assets/images/MobileGalleryLogo.png";
import MobileChallengeLogo from "../assets/images/MobileChallengeLogo.png";
import MobileContributeLogo from "../assets/images/MobileContributeLogo.png";
import MobileNewsLogo from "../assets/images/MobileNewsLogo.png";
import MobileContactLogo from "../assets/images/MobileContactLogo.png";

// All the links as static data
const links = [
  {
    name: "Home",
    href: "/",
    Logo: MobileHomeLogo,
  },
  {
    name: "Project",
    href: "/project",
    Logo: MobileProjectLogo,
  },
  {
    name: "Gallery",
    href: "/gallery",
    Logo: MobileGalleryLogo,
  },
  {
    name: "Challenge",
    href: "/challenge",
    Logo: MobileChallengeLogo,
  },
  {
    name: "Contribute",
    href: "/contribute",
    Logo: MobileContributeLogo,
  },
  {
    name: "News",
    href: "/news",
    Logo: MobileNewsLogo,
  },
  {
    name: "Contacts",
    href: "/contact",
    Logo: MobileContactLogo,
  },
];



// 
const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [, setIsOpen] = useState("");
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleSelectItem = (item: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpenMenu(!isOpenMenu);
      setIsAnimating(false);
      setIsOpen("");
    }, 400);
  };

  const resetSelectItem = () => {
    if (isAnimating) return;

    if (isOpenMenu) {
      setTimeout(() => {
        setIsOpenMenu(!isOpenMenu);
        setIsAnimating(false);
        setIsOpen("");
      }, 400);
    }
  };

  const resetActiveLink = () => {
    if (activeLink !== null) {
      let activeNavLink = document.getElementById(`Nav-link${activeLink}`);
      if (activeNavLink) {
        activeNavLink.style.color = "black";
      }
      setActiveLink(null);
    }
  };

  const handleWebNavClick = (index: number) => {
    // Reset the color of the previously active link
    resetActiveLink();

    let dot = document.getElementById(`WebNav-dot${index}`);
    let navLink = document.getElementById(`Nav-link${index}`);
    if (dot && navLink) {
      dot.style.display = "block";
      navLink.style.color = "#0A2471";
      setActiveLink(index);
    }

    links.forEach((link, i) => {
      if (i !== index) {
        let otherDot = document.getElementById(`WebNav-dot${i}`);
        let otherNavLink = document.getElementById(`Nav-link${i}`);
        if (otherDot && otherNavLink) {
          otherDot.style.display = "none";
          otherNavLink.style.color = "black";
        }
      }
    });
  };
  const currentRoute = location.pathname;


  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  return (
    <div className="xxl:w-[1440px] xxl:mx-auto px-2 lg:px-4 sm:px-12 py-1 flex justify-between  items-center bg-gpgp-blue sm:bg-white xxxxl:max-w-[2560px] xxxxl:mx-auto">
      <nav className="flex w-full md:flex px-0 py-0 md:px-4 md:py-3 items-center justify-between">
        {/* phone Navbar */}{" "}
        <Link
          to="/"
          className={`flex items-center pl-4 sm:hidden transition-all ease-in-out
          ${isOpenMenu ? "opacity-0" : ""}
          `}
          onClick={() => resetSelectItem()}
        >
          <MobileLogo className="w-max" />
        </Link>
        {isOpenMenu && (
          <div
            className={`bg-gpgp-blue h-screen sm:hidden !z-[172] text-white mt-[60px] fixed w-full left-0 top-0 transition-all ease-in duration-500 flex flex-col px-7 ${
              isOpenMenu ? styles.menuContainer : ""
            } ${isOpenMenu && styles.slideDown} ${
              isAnimating && styles.slideUp
            }`}
          >
            <div
              className={`flex flex-col items-center mt-10 uppercase z-50 ${styles.menuItem}`}
            >
              {links.map((link, index) => (
                <div
                  key={index}
                  className="text-white w-[100%] mx-4 my-3 text-2xl font-[200] hover:font-semibold flex items-center"
                >
                  <Link
                    to={link.href}
                    onClick={() => handleSelectItem(link.name)}
                    className="flex justify-start items-center"
                  >
                    <img src={link.Logo} alt="" className="w-[50px] mr-5" />
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Web Navbar */}
        <Link
          to="/"
          className="hidden sm:flex items-center sm:pl-0 xxxxl:w-[320px] md:pl-4"
          onClick={() => {
            resetSelectItem();
            // Hide all dots
            links.forEach((link, i) => {
              let dot = document.getElementById(`WebNav-dot${i}`);
              if (dot) {
                dot.style.display = "none";
              }
            });
          }}
        >
          <Logo className="w-max" logo={"NewNavLogo2.png"} />
        </Link>
        <div className="hidden sm:flex text-xl font-semibold">
          {links.map((link, index) => {
            if (link.name !== "Home") {
              return (
                <div
                  key={index}
                  className="group relative  my-0 hover:cursor-pointer  hover:text-gpgp-blue uppercase"
                >
                  <div
                    className="flex flex-col items-center text-sm lg:text-[1rem] xxl:text-[1.2rem] xxxxl:text-[1.3rem] gap-1 px-3 py-2 w-full"
                    onClick={() => {
                      handleWebNavClick(index);
                      resetSelectItem();
                    }}
                  >
                    <Link
                      to={link.href}
                      className="text-black"
                      id={`Nav-link${index}`}
                    >
                      {link.name}
                    </Link>
                    <div className="text-center">
                      <p
                        id={`WebNav-dot${index}`}
                        className={`bg-gpgp-blue rounded-full h-[6px] w-[7px] ${
                          currentRoute === "/"
                            ? "hidden"
                            : currentRoute === link.href
                            ? "block"
                            : "hidden"
                        }`}
                      ></p>
                    </div>
                  </div>
                </div>
              );
            }
            else{
              return null
            }
          })}
        </div>
        {/* hamburger menu */}
        <div className="inline-block sm:hidden text-white py-1 px-3 h-auto">
          <button
            className="flex flex-col h-auto w-12 rounded justify-center items-center group"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpenMenu
                  ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-50"
                  : "opacity-100 group-hover:opacity-50"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpenMenu ? "opacity-0" : "opacity-100 group-hover:opacity-50"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpenMenu
                  ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-50"
                  : "opacity-100 group-hover:opacity-50"
              }`}
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import SvgTamsaLogo from "@/icons/TamsaLogo";
import SvgWorld from "@/icons/World";
import MenuButton from "./menuButtons";
import { usePathname } from "next/navigation";

function Nav({ lang }: { lang: Locale }) {
  const [showNav, setShowNav] = useState(false);
  const [active, setActive] = useState(false);
  const [navigationLinks, setNavigationLinks] = useState<any>();
  const pathName = usePathname();

  const getNavData = async () => {
    try {
      const { navigationLinks } = await getDictionary(lang);
      setNavigationLinks(navigationLinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNavData();
  }, []);

  // useEffect(() => {
  //   console.log(navigationLinks);
  // }, [navigationLinks]);

  const handleToggleNav = () => {
    setShowNav((prevState) => !prevState);
    setActive((prevState) => !prevState);
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  // const switchLanguage = (newLanguage: string) => {
  //   const newPath = router.asPath.replace(
  //     `/${router.locale}`,
  //     `/${newLanguage}`,
  //   );
  //   router.push(newPath, newPath, { locale: newLanguage });
  // };

  const cutString = (str: string) => {
    const parts = str.split("/");

    // If the string is in the format "/en" or "/ar", return "/"
    if (parts.length === 2 && (parts[1] === "en" || parts[1] === "ar")) {
      return "/";
    }

    // If the string is in the format "/en/something" or "/ar/something", return "/something"
    if (parts.length >= 3) {
      return `/${parts[2]}`;
    }

    // For other cases, return the original string
    return str;
  };

  useEffect(() => {
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
    }

    if (lang === "en") {
      document.documentElement.dir = "ltr";
    }
  }, [lang]);

  return (
    <>
      {/* nav large screen */}

      <div
        className="fixed left-0 top-0 z-[15]  w-full bg-[#FAF9F4CC] bg-opacity-80  backdrop-blur-sm "
        style={{ direction: lang === "ar" ? "ltr" : "rtl" }}
      >
        <div className="relative  sm:pl-[3%] sm:pr-[3%] 2xl:mx-auto 2xl:max-w-[auto] ">
          <div className="mx-auto  flex items-center gap-5 py-3 lg:gap-10 lg:py-4  lg:pr-2 xl:max-w-[90rem] xl:pr-0  ">
            <div className="flex w-full flex-row items-center justify-between px-6 lg:hidden">
              <MenuButton active={active} handleToggleNav={handleToggleNav} />
              {/* <SearchComponent /> */}
              <Link href="/">
                <Image
                  src="images/logo.svg"
                  alt="logo"
                  width={200}
                  height={200}
                  className="mr-10 h-[18.623px] w-[164px]"
                  loading="lazy"
                />
              </Link>
            </div>

            <div className=" hidden h-full w-full items-center lg:ml-10 lg:flex lg:justify-between  xl:ml-0">
              <Link href={redirectedPathName(lang === "ar" ? "en" : "ar")}>
                <SvgWorld />
              </Link>

              <div className="flex  justify-between ">
                <div className=" flex items-center gap-10">
                  {navigationLinks?.map(
                    (
                      item: { label: string; path: string; children?: any },
                      index: number
                    ) => {
                      console.log(item.path, pathName);
                      if (item.children) {
                        return (
                          <>
                            <div className="group relative cursor-pointer">
                              <div
                                className={`menu-hover w-full flex items-center justify-center hover:text-bs-100 cursor-pointer text-sm  font-normal capitalize xl:text-sm`}
                                // href={`/${lang}${item.path}`}
                                // role="link"
                                key={index}
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                              >
                                <svg
                                  className="-mr-1 h-5 w-5 text-gray-400"
                                  viewBox="0 0 20 20"
                                  fill="black"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                {item.label}
                              </div>

                              <div
                                className="invisible absolute z-50 flex w-[200px] flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                                onClick={() => {}}
                              >
                                {item.children?.map(
                                  (
                                    itemm: { label: string; path: string },
                                    index: number
                                  ) => {
                                    return (
                                      <Link
                                        href={`/${lang}${itemm.path}`}
                                        role="link"
                                        key={index}
                                        className={`my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 ${
                                          itemm.path === cutString(pathName)
                                            ? "text-black"
                                            : "text-bs-50"
                                        }`}
                                      >
                                        {itemm.label}
                                      </Link>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </>
                        );
                      } else {
                        return (
                          <Link
                            href={`/${lang}${item.path}`}
                            role="link"
                            key={index}
                            className={` hover:text-bs-100 cursor-pointer text-sm  font-normal capitalize xl:text-sm ${
                              item.path === cutString(pathName)
                                ? "border-b-[2px] border-[#D67254]"
                                : "text-bs-50"
                            }`}
                          >
                            {item.label}
                          </Link>
                        );
                      }
                    }
                  )}
                </div>
              </div>
              <div>
                <SvgTamsaLogo />
              </div>

              {/* <SearchComponent /> */}
            </div>
          </div>
        </div>
      </div>

      {/* nav small screen */}
      <div
        className={`fixed left-0 top-0 z-30 h-full w-full bg-[#00000052] transition-opacity duration-500 ease-in-out lg:hidden ${
          showNav ? "opacity-1 translate-x-0" : "-translate-x-full opacity-0"
        }`}
        onClick={handleToggleNav}
      ></div>

      <div
        className={`fixed top-0 h-full w-full overflow-auto bg-white sm:w-[35%] md:w-[30%] lg:hidden ${
          showNav ? "left-0" : "right-0"
        } z-40 transition-transform duration-500 ease-in-out ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="m-3 flex flex-col gap-y-6">
          <div className="flex justify-between  ">
            <Link href="/" onClick={handleToggleNav}>
              <Image
                src="/svg/logo.svg"
                alt="GFO Logo"
                width={50}
                height={50}
              />
            </Link>

            <button onClick={handleToggleNav}>
              <span className="inline-block h-[45px] text-4xl">&times;</span>
            </button>
          </div>

          <hr />

          <div className=" flex flex-col justify-center gap-y-4 ">
            {navigationLinks?.map(
              (item: { label: string; path: string }, index: number) => {
                return (
                  <Link
                    href={item.path}
                    role="button"
                    key={index}
                    className="hover:text-bs-100 flex cursor-pointer items-center justify-between capitalize"
                  >
                    <span className="text-lg">{item.label}</span>
                  </Link>
                );
              }
            )}

            {/* <p>
              {isEnglish ? (
                <span role="button" onClick={() => switchLanguage("ar")}>
                  العربية
                </span>
              ) : (
                <span role="button" onClick={() => switchLanguage("en")}>
                  English
                </span>
              )}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  return (
    <>
      {/* nav large screen */}

      <div className="sticky left-0 top-0 z-[15]  w-full bg-[#FAF9F4CC] bg-opacity-80  backdrop-blur-lg ">
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
                    (item: { label: string; path: string }, index: number) => {
                      return (
                        <Link
                          href={`/${lang}${item.path}`}
                          role="link"
                          key={index}
                          className={` hover:text-bs-100 cursor-pointer text-sm  font-normal capitalize xl:text-sm`}
                        >
                          {item.label}
                        </Link>
                      );
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

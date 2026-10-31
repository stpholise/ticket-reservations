"use client";
import Link from "next/link";
import { navigations } from "@/data";
import { usePathname } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setShowMenu(true);
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md py-2">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-2 sm:px-8 md:px-18 py-3 md:gap-14">
        <Link
          href={"/"}
          aria-label="TicketDays Home"
          className="font-helvetica text-primary"
        >
          <p className=" py-2 px-4 text-xl font-medium">TicketDays</p>
        </Link>

        <div className="hidden items-center gap-22 md:flex">
          <nav className="flex items-center gap-8 font-helvetica">
            {navigations.map((item, i) => (
              <Link
                href={item.url}
                key={i}
                aria-current={pathname === item.url ? "page" : undefined}
                className={clsx(
                  " font-normal hover:text-primary duration-300 cursor-pointer",
                  pathname === item.url ? "text-primary" : "text-black",
                )}
              >
                {item.title}
              </Link>
            ))}
            <button className="flex items-center gap-2 group text-black cursor-pointer hover:text-primary transition-colors duration-300">
              Resources
              <FaCaretDown className="text-black group-hover:text-primary" />
            </button>
          </nav>
          <div className="flex items-center gap-6 text-black">
            <button className="cursor-pointer">
              {" "}
              <RiSearch2Line className="text-black size-6" />
            </button>
            <Link
              href={"/"}
              className="hover:text-primary transition-colors duration-300"
            >
              Login
            </Link>
            <Link
              href={"/"}
              className="py-2 px-5 rounded-md bg-primary text-white font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button className="cursor-pointer">
            {" "}
            <RiSearch2Line className="text-black size-6" />
          </button>
          <button
            type="button"
            aria-label="Open navigaion menu"
            aria-expanded={openMenu}
            aria-controls="mobile-navigation"
            onClick={handleOpenMenu}
            className="rounded-lg p-2 text-white hover:bg-white/10"
          >
            <RxHamburgerMenu className="text-black size-8 h-6" />
          </button>
        </div>

        {/* Mobile nav */}
        {showMenu && (
          <div
            className={clsx(
              "fixed inset-0 h-screen z-50 bg-black/60 md:hidden transition-opacity",
              openMenu ? "visible opacity-100" : "invisible opacity-0",
            )}
            onClick={handleCloseMenu}
          >
            <nav
              className={clsx(
                "relative flex flex-col gap-4 h-full w-10/12 max-w-sm bg-gray-100 pt-22 shadow-xl px-4",
                openMenu ? "animate-slide-in" : "animate-slide-out",
              )}
            >
              {navigations.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  onClick={handleCloseMenu}
                  aria-current={pathname === item.url ? "page" : undefined}
                  tabIndex={openMenu ? undefined : -1}
                  className={clsx(
                    " p-3 pb-4 border-b text-xl font-semibold capitalize transition-colors hover:text-amber-600",
                    pathname === item.url ? "text-amber-600" : "text-gray-700",
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex items-center gap-6 text-black mt-auto py-8 px-4 w-full ">
                <Link
                  href={"/"}
                  className="w-1/2 hover:text-primary transition-colors duration-300 py-2 text-center"
                >
                  Login
                </Link>
                <Link
                  href={"/"}
                  className="py-2 px-5 w-1/2 rounded-md bg-primary text-white font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

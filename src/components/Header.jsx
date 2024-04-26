import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  HomeIcon,
  XIcon,
  BriefcaseIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const solutions = [
    {
      name: "Home",
      description: "",
      href: "/",
      icon: HomeIcon,
    },
    {
      name: "About",
      description: "",
      href: "/about",
      icon: BriefcaseIcon,
    },
    {
      name: "Faqs",
      description: "Ask questions based on your interest.",
      href: "/faqs",
      icon: QuestionMarkCircleIcon,
    },
  ];

  return (
    <Popover className="container relative z-50 mx-auto">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-business-secondary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-business-primary">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden space-x-10 lg:flex bg-gray-200 px-16 py-4 rounded-[60px] bg-opacity-30 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "text-lg transition-colors duration-150 font-bold text-business-primary hover:text-gray-500"
                  : "text-base font-medium transition-colors duration-150 text-gray-800 hover:text-gray-500"
              }
            >
              Home
            </Link>
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "text-lg transition-colors duration-150 font-bold text-business-primary hover:text-gray-500"
                  : "text-base font-medium transition-colors duration-150 text-gray-800 hover:text-gray-500"
              }
            >
              About us
            </Link>

            <Link
              to="/faqs"
              className={
                location.pathname === "/faqs"
                  ? "text-lg transition-colors duration-150 font-bold text-business-primary hover:text-gray-500"
                  : "text-base font-medium transition-colors duration-150 text-gray-800 hover:text-gray-500"
              }
            >
              FAQs
            </Link>
          </nav>

          <div className="text-white text-center items-center justify-end hidden lg:flex lg:flex-1 lg:w-0">
            {/* <a
              target="_blank"
              href={process.env.REACT_APP_SIGNIN_URL}
              rel="noreferrer"
              className="whitespace-nowrap text-business-primary py-4 px-1 mx-6 rounded-[30px] items-center transition-colors hover:bg-business-primary hover:text-white duration-150 font-medium border border-business-primary border-2 w-36 focus:ring-business-primary focus:border-business-primary border-opacity-60"
            >
              Sign in
            </a> */}
            <a
              target="_blank"
              href={process.env.REACT_APP_SIGNUP_URL}
              rel="noreferrer"
              className="whitespace-nowrap items-center px-1 py-4 w-36 md:py-4 font-medium bg-business-primary hover:bg-business-secondary transition-colors border border-0 duration-150 ease-in-out rounded-[30px]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform lg:hidden"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-business-secondary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 w-6 h-6 text-business-primary"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div>
                <a
                  target="_blank"
                  href={process.env.REACT_APP_SIGNUP_URL}
                  rel="noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white transition-colors duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-business-primary hover:bg-business-secondary"
                >
                  Get Started
                </a>
                {/* <p className="mt-6 text-base font-medium text-center text-business-primary">
                  Existing User?
                  <a
                    href="/"
                    rel="noopener"
                    className="text-business-primary hover:text-indigo-500"
                  >
                    Sign in
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

import React, { Fragment } from "react";
import HeroAboutCard from "./HeroAboutCard";
import Header from "./Header";
import { Transition } from "@headlessui/react";

export default function Hero() {
  let data = [
    {
      icon_url: "img/icons/alarm.svg",
      icon_alt: "alarm-icon",
      text: "my750hrstracker removes guess work in determining which activities and hours meets IRS criteria.",
      header: "AUDIT PROOF TRACKING",
    },
    {
      icon_url: "img/icons/lock.svg",
      icon_alt: "lock-icon",
      text: "Say goodbye to tedious spreadsheets and manual data entry! No more risking inaccurate formulas or errors—let our system handle it for you efficiently and accurately.",
      header: "AVOID MESSY SPREADSHEETS",
    },
    {
      icon_url: "img/icons/emoji.svg",
      icon_alt: "emoji-icon",
      text: "my750hrstracker is designed for ease of use and navigation, making it accessible for users with a variety of experience",
      header: "USER-FRIENDLY INTERFACE",
    },
    {
      icon_url: "img/icons/headset.svg",
      icon_alt: "headset-icon",
      text: "Have questions in regards to your Real Estate Professional Status? Our team of tax experts are always available to provide guidance.",
      header: "PROFESSIONAL GUIDANCE AND SUPPORT",
    },
    {
      icon_url: "img/icons/cloud.svg",
      icon_alt: "cloud-icon",
      text: "Access your data anytime, anywhere, on any device. With my750hrstracker, you can stay connected on the go, ensuring you never miss a beat.",
      header: "CLOUD BASED ACCESSIBILITY",
    },

    {
      icon_url: "img/icons/network.svg",
      icon_alt: "network-icon",
      text: "my750hrstracker allows for real-time data entry, a feature preferred by tax courts for its accuracy and reliability.",
      header: "REAL-TIME ENTRY",
    },
  ];
  return (
    <Fragment>
      <Header />

      <section class="flex items-center space-x-8 bg-white">
        <div className="container w-full pt-16 mx-auto text-center lg:pb-48 lg:py-64 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="font-semibold leading-snug text-gemspay-dark ">
              <span className="block leading-snug text-4xl md:text-5xl xl:text-6xl md:leading-snug lg:leading-snug xl:leading-snug font-bold">
                Tracking Real Estate Hours Made Easy
              </span>{" "}
              <span className="block text-4xl leading-snug md:text-5xl xl:text-6xl md:leading-snug lg:leading-snug xl:leading-snug text-business-secondary font-bold">
                Get Peace of Mind
              </span>
            </h1>
            <p className="max-w-md mt-3 text-lg md:text-xl md:mt-5 md:max-w-lg font-normal leading-8 mx-auto lg:mx-0">
              Struggling with your REPS? my750hrstracker <br /> is here to
              elevate your real estate game.
            </p>
            <div className="mb-16 sm:mb-0 mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="w-2/3 sm:w-1/2 md:w-auto mx-auto lg:mx-0 flex items-center justify-center gap-4">
                <div className="w-60 hover:scale-105 transform transition duration-200">
                  <a href="/">
                    <img src="/img/googleplay.png" alt="googleplay-download" />
                  </a>
                </div>
                <div className="w-60 hover:scale-105 transform transition duration-200">
                  <a href="/" className="">
                    <img src="/img/appstore.png" alt="appstore-download" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative w-full hidden md:block pb-40 overflow-hidden bg-center bg-cover bg-no-repeat h-96 lg:block md:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3 lg:h-full pointer-events-none"
          style={{
            backgroundImage: "url(/img/hero-bg.png)",
            // backgroundPosition: "bottom",
          }}
        >
          <Transition
            appear={true}
            show={true}
            enter="transform ease-out duration-500 transition delay-300"
            enterFrom="transform translate-x-4 opacity-0 sm:translate-x-20 duration-500"
            enterTo="translate-x-0 opacity-100 duration-500"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <img
              className="relative object-scale-down h-full lg:w-4/5 lg:-right-100 top-40 pointer-events-none"
              src="/img/screen-snip.png"
              alt=""
            />
          </Transition>
        </div>
      </section>
      <section className="bg-[#F3F3F3] relative">
        <div className="container mx-auto py-20 md:py-28 px-4">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/3">
              <h2 className="w-full md:leading-2 font-bold text-3xl md:text-4xl text-business-primary">
                Why choose my750hrstracker?
              </h2>
              <p className="mt-4 w-full text-lg md:text-2xl md:max-w-3xl lg:max-w-4xl text-justify md:text-left">
                Qualifying as a real estate professional can be complex,
                especially given the high audit scrutiny. That's why we created
                my750hrstracker—designed by CPAs who understand the challenges
                and the stakes. Our platform makes it easy to track and document
                your hours, giving you the peace of mind.
              </p>
              <div className="my-8 md:my-16 w-2/3 md:w-2/5 mx-auto md:mx-0 md:text-left">
                <a
                  target="_blank"
                  href={process.env.REACT_APP_SIGNUP_URL}
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="text-white w-full text-center px-20 md:px-20 py-2 md:py-3 font-medium bg-business-primary hover:bg-business-secondary transition-colors border border-0 duration-150 ease-in-out rounded-[30px]"
                  >
                    Get Started
                  </button>
                </a>
              </div>
            </div>
            <div className="mt-3 md:mt-0 w-full md:w-1/3">
              <img src="img/hero-img-1.png" className="h-96" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-transparent relative h-24">
        <div className="absolute leading-none left-0 bottom-0 w-full overflow-hidden rotate-180 z-100">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(155%+1.3px)] h-[180px] transform rotate-y-180"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#CD932A14"
              fill-opacity="1"
            ></path>
          </svg>
        </div>
      </section> */}
      <section className="bg-[#CD932A14]" id="features">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="">
            <h2 className="w-full text-center font-bold text-2xl md:text-4xl text-business-primary">
              Benefits of <span className="lowercase">my750hrstracker</span>
            </h2>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-8 md:gap-y-6 mt-8 md:mt-16 mx-auto">
            {data.map((d, i) => (
              <HeroAboutCard key={`icon-${i}`} data={d} />
            ))}
          </div>

          <div className="my-16 md:my-16 w-2/3 md:w-2/5 mx-auto text-center">
            <a
              target="_blank"
              href={process.env.REACT_APP_SIGNUP_URL}
              rel="noreferrer"
            >
              <button
                type="button"
                className="text-white w-full text-center px-20 md:px-20 py-2 md:py-3 font-medium bg-business-primary hover:bg-business-secondary transition-colors border border-0 duration-150 ease-in-out rounded-[30px]"
              >
                Get Started
              </button>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

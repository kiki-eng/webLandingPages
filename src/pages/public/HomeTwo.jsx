import { Fragment } from "react";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import Subscription from "../../components/Subscription";
import Hero from "../../components/HeroSection";
import { Testimonials } from "../../components/testimonials";
import Header from "../../components/Header";
import { Transition } from "@headlessui/react";

export default function HomeTwo() {
  return (
    <Fragment>
      <Header />
      <section class="flex items-center space-x-8 bg-white">
        <div className="container w-full pt-16 mx-auto text-center lg:pb-48 lg:py-64 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="font-semibold leading-snug text-gemspay-dark ">
              <span className="block leading-snug text-5xl md:text-5xl xl:text-6xl md:leading-snug lg:leading-snug xl:leading-snug font-bold">
                Tracking Real Estate Hours Made Easy
              </span>{" "}
              <span className="block text-5xl leading-snug md:text-5xl xl:text-6xl md:leading-snug lg:leading-snug xl:leading-snug text-business-secondary font-bold">
                Get Peace of Mind
              </span>
            </h1>
            <p className="max-w-md mt-3 text-xl md:mt-5 md:max-w-lg font-normal leading-8 mx-auto lg:mx-0">
              Struggling with your REPS? my750hrstracker <br /> is here to
              elevate your real estate game.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
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
          className="relative w-full pb-40 overflow-hidden bg-center bg-no-repeat h-96 lg:block md:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3 lg:h-full pointer-events-none"
          style={{
            backgroundImage: "url(/img/hero-bg.png)",
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
              className="relative object-scale-down h-full lg:w-3/4 lg:-right-100 top-40 pointer-events-none -mr-64"
              src="/img/screen-snip.png"
              alt=""
            />
          </Transition>
        </div>
      </section>

      <section class="bg-blue-500 py-16 text-white text-center">
        <h1 class="text-4xl font-bold">Section One</h1>
        <p class="mt-4">
          This is the first section. You can add any content here.
        </p>
      </section>

      {/* <!-- Wave Divider --> */}
      <div class="relative bg-white -mt-16">
        <svg
          class="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#222222"
            fill-opacity="1"
            d="M0,192L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div class="absolute pt-28 left-0 right-0 overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1B114E"
            fill-opacity="1"
            d="M0,160L40,181.3C80,203,160,245,240,245.3C320,245,400,203,480,181.3C560,160,640,160,720,186.7C800,213,880,267,960,250.7C1040,235,1120,149,1200,122.7C1280,96,1360,128,1400,144L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div class="custom-shape-divider-top-1730989106">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <section class="bg-green-500 py-16 text-white text-center">
        <h1 class="text-4xl font-bold">Section Two</h1>
        <p class="mt-4">
          This is the second section. The wave effect separates the sections.
        </p>
      </section>
    </Fragment>
  );
}

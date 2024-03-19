import React from "react";
import HeroAboutCard from "./HeroAboutCard";
import Header from "./Header";

export default function Hero() {
  let data = [
    {
      icon_url: "img/icons/emoji.svg",
      icon_alt: "emoji-icon",
      text: "User-friendly interface - Our app is designed to be easy to use and navigate, even for users with limited technical expertise.",
    },
    {
      icon_url: "img/icons/network.svg",
      icon_alt: "network-icon",
      text: "Get the peace of mind of knowing your real estate professional hour will be audit proof if the IRS audits you",
    },
    {
      icon_url: "img/icons/lock.svg",
      icon_alt: "lock-icon",
      text: "Remove the uncertainty of taking risky tax positions know whether or not you qualify as a real estate professional",
    },
    {
      icon_url: "img/icons/alarm.svg",
      icon_alt: "alarm-icon",
      text: "Intuitive hour and activity tracking. Say goodbye to tedious spreadsheets and manual data entry. 750hrs makes tracking your REPS hours and activities effortless, ensuring you always meet IRS requirements.",
    },
    {
      icon_url: "img/icons/headset.svg",
      icon_alt: "headset-icon",
      text: "Expert guidance and support: Have a question about REPS? No problem. Our team of experts is always available to provide you with the guidance and support you need.",
    },
    {
      icon_url: "img/icons/cloud.svg",
      icon_alt: "cloud-icon",
      text: "Cloud-based accessibility: Access your data from anywhere, anytime. 750hrs is available on all devices, allowing you to stay connected and productive on the go.",
    },
  ];
  return (
    <section className="lg:relative">
      <Header />
      <div className="container mx-auto px-4 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-24">
          <div className="header text-2xl md:text-4xl leading-2 font-semibold w-full md:w-4/5 my-4">
            <p className="">
              Tracking And Audit Proofing Your Real Estate Professional Hours
              Has Never Been Easier,
            </p>
            <p className="mt-2 text-business-secondary font-bold">
              Get Peace Of Mind.
            </p>
            <div className="font-normal text-lg md:text-2xl mt-4 md:mt-8">
              <p>Ready to stop struggling with REPS?</p>
              <p>
                my750hrstracker is here to empower and elevate your real estate
                game.
              </p>
              <div className="flex mt-2 md:mt-6">
                <button
                  type="button"
                  className="whitespace-nowrap text-sm md:text-lg px-4 md:px-16 py-1 md:py-2 mr-3 md:mr-6 text-left rounded-[30px] bg-gray-200 w-1/2 lg:w-64 focus:ring-business-primary focus:border-business-primary border-opacity-60"
                >
                  <div className="flex flex-row w-full">
                    <div
                      className="grid grid-cols-2 divide-x-4 divide-gray-400 mr-3
            "
                    >
                      <div className="inline-block align-middle pr-2">
                        <svg
                          width="21"
                          height="24"
                          viewBox="0 0 21 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="fill-gray-700"
                        >
                          <path
                            d="M17.2332 23.04C15.9266 24.3067 14.4999 24.1067 13.1266 23.5067C11.6732 22.8933 10.3399 22.8667 8.80656 23.5067C6.88656 24.3333 5.87323 24.0933 4.72656 23.04C-1.78011 16.3333 -0.820107 6.12 6.56656 5.74667C8.36656 5.84 9.61989 6.73333 10.6732 6.81333C12.2466 6.49333 13.7532 5.57333 15.4332 5.69333C17.4466 5.85333 18.9666 6.65333 19.9666 8.09333C15.8066 10.5867 16.7932 16.0667 20.6066 17.6C19.8466 19.6 18.8599 21.5867 17.2199 23.0533L17.2332 23.04ZM10.5399 5.66667C10.3399 2.69333 12.7532 0.24 15.5266 0C15.9132 3.44 12.4066 6 10.5399 5.66667Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="pl-1 text-right inline-block align-middle">
                        <svg
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          class="fill-current"
                        >
                          <path
                            d="M12.7717 11.488L16.7143 7.54533L3.97967 0.387995C3.13567 -0.0680046 2.34501 -0.132004 1.65167 0.366662L12.7717 11.488ZM17.3863 16.104L21.485 13.7987C22.285 13.3507 22.7237 12.716 22.7237 12.012C22.7237 11.3093 22.285 10.6733 21.4863 10.2253L17.7757 8.14133L13.5983 12.3173L17.3863 16.104ZM0.966341 1.336C0.881008 1.59866 0.833008 1.892 0.833008 2.21333V21.82C0.833008 22.328 0.945008 22.7653 1.14767 23.1133L11.9437 12.316L0.966341 1.336ZM12.7717 13.1427L2.03567 23.88C2.24101 23.9587 2.46234 24 2.69567 24C3.11167 24 3.54501 23.8773 3.98634 23.632L16.3263 16.7027L12.7717 13.1427Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-right w-full text-sm md:text-lg font-medium inline-block align-middle">
                      Download app
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  className="text-white text-sm whitespace-nowrap md:text-lg inline-flex items-center px-4 md:px-16 py-1 md:py-2 font-medium bg-business-primary hover:bg-business-secondary transition-colors border border-0 duration-150 ease-in-out rounded-[30px]"
                >
                  Get Started
                </button>
              </div>
              <p className="text-gray-400 mt-5">
                Join 1,500+ users in minimizing risk, saving time and maximizing
                profits
              </p>
            </div>
          </div>
          <div className="">
            <img src="img/hero-img.png" className="" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-3 md:my-6">
          <div className="w-full md:w-3/5">
            <h2 className="w-full md:leading-2 font-medium md:font-normal text-3xl md:text-5xl text-business-primary tracking-wide">
              Why use my750hrstracker as your real estate professional
              management tracker.
            </h2>
            <p className="mt-4 w-full md:w-4/5 text-xl md:text-3xl">
              Qualifying as a real estate professional is an exception to the
              rule of IRC sec 469, which says “All Rental Activities are
              considered “per se” passive. It is therefore a highly audited area
              on investors tax returns. These are a few reasons and benefits of
              using our App.
            </p>
          </div>
          <div className="mt-3 md:mt-0 w-full md:w-2/5">
            <img
              src="img/hero-img-1.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {data.map((d, i) => (
            <HeroAboutCard key={`icon-${i}`} data={d} />
          ))}
        </div>

        <div className="my-8 md:my-16 w-2/3 md:w-3/5 mx-auto text-center">
          <button
            type="button"
            className="text-white inline-flex items-center px-16 md:px-20 py-3 md:py-4 font-medium bg-business-primary hover:bg-business-secondary transition-colors border border-0 duration-150 ease-in-out rounded-[30px]"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

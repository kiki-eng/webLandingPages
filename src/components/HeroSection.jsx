import React from "react";
import HeroAboutCard from "./HeroAboutCard";

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
    <div>
      <div className="flex flex-row">
        <div className="header text-4xl leading-2 font-semibold w-full md:w-3/5">
          <p>
            Tracking And Audit Proofing Your Real Estate Professional Hours Has
            Never Been Easier,
          </p>
          <p className="text-business-secondary font-bold">
            Get Peace Of Mind.
          </p>
          <div className="font-normal text-2xl">
            <p>
              Ready to stop struggling with REPS? my750hrstracker is here to
              empower and elevate your real estate game.
            </p>
            {/* <div className="text-white flex mx-auto w-5/6 justify-center">
              <button
                type="button"
                className="py-2 pl-6 pr-4 mx-6 text-left rounded-[30px] text-sm border border-business-primary border-2 w-full lg:w-64 focus:ring-business-primary focus:border-business-primary border-opacity-60"
              >
                <div className="flex flex-row justify-between w-full text-white text-lg">
                  <div
                    className="grid grid-cols-2 divide-x-4 divide-white mr-3
            "
                  >
                    <div className="flex text-right inline-block align-middle">
                      <img
                        src="/img/icons/apple_icon.svg"
                        alt="apple-store-logo"
                      />
                    </div>
                    <div className="flex text-right inline-block align-middle">
                      <img
                        className="ml-1.5"
                        src="/img/icons/playstore_icon.svg"
                        alt="play-store-logo"
                      />
                    </div>
                  </div>
                  <div className="">
                    <span className="font-semibold">Download app</span>
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="inline-flex items-center px-16 py-2 font-medium bg-business-primary hover:bg-business-secondary transition-colors border border-0 duration-150 ease-in-out rounded-[30px]"
              >
                Get Started
              </button>
            </div> */}
          </div>
        </div>
        <div>
          <img src="img/hero-img.png" alt="" />
        </div>
      </div>
      <div className="flex flex-row my-6">
        <div className="w-full md:w-3/5">
          <h2 className="w-5/6 leading-2 font-semibold text-3xl text-business-primary">
            Why use my750hrstracker as your real estate professional management
            tracker
          </h2>
          <p className="mt-4 w-2/3 text-justify text-xl">
            Qualifying as a real estate professional is an exception to the rule
            of IRC sec 469, which says “All Rental Activities are considered
            “per se” passive. It is therefore a highly audited area on investors
            tax returns. These are a few reasons and benefits of using our App.
          </p>
        </div>
        <div className="img-container w-full md:w-2/5">
          <img src="img/hero-img-1.png" alt="" />
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2">
        {data.map((d, i) => (
          <HeroAboutCard key={`icon-${i}`} data={d} />
        ))}
      </div>
    </div>
  );
}

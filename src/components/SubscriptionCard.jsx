import React from "react";

export default function SubscriptionCard(props) {
  return (
    <div className="relative w-full p-10 md:p-16 bg-white text-black rounded-3xl shadow-sm flex flex-col">
      <div className="flex-1">
        <div className="text-center">
          <h3 className="text-lg md:text-2xl font-semibold ">
            {props.data.plan}
          </h3>
          <p className="mt-2 md:mt-4 text-2xl md:text-4xl font-bold tracking-tight">
            {props.data.amount}
          </p>
        </div>
        <hr className="border border-1 border-gray-200 mt-4 md:mt-6 mb-8 md:mb-12" />
        <ul className="mt-4 md:mt-6 space-y-4 md:space-y-6">
          {props.data.features.map((feat, index) => (
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="flex-shrink-0 w-6 h-6 text-emerald-500"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="ml-3 text-lg md:text-xl">{feat}</span>
            </li>
          ))}
        </ul>
        <div className="text-center mt-12 md:mt-20">
          <a href="/">
            <button
              type="button"
              className="p-3 md:p-4 text-center w-64 mx-auto text-business-primary rounded-[30px] text-sm border border-business-primary border-2 focus:ring-business-primary focus:border-business-primary border-opacity-60"
            >
              <span className="font-semibold">Get Started</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

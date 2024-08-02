import React from "react";

export default function HeroAboutCard(props) {
  return (
    <div className="flex flex-row mt-4 md:mt-8">
      <div className="">
        <div className="icon-content rounded-full size-13 p-4 justify-center bg-business-primary text-white">
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
            className="flex-shrink-0 w-6 h-6 text-white"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>
      <div className="text-content mx-3 md:mx-6 w-full md:w-8/12">
        <p className="text-lg md:text-2xl">{props.data.text}</p>
      </div>
    </div>
  );
}

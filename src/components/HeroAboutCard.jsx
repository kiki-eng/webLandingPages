import React from "react";

export default function HeroAboutCard(props) {
  return (
    <div className="flex flex-row mt-6">
      <div className="">
        <div className="icon-content rounded-full size-12 p-4 justify-center bg-business-primary text-white">
          <img
            src={props.data.icon_url}
            className="w-48"
            alt={props.data.icon_alt}
          />
        </div>
      </div>
      <div className="text-content mx-6">
        <p className="text-2xl text-shadow shadow-gray-500/50">
          {props.data.text}
        </p>
      </div>
    </div>
  );
}

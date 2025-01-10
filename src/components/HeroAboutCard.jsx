import React from "react";

export default function HeroAboutCard(props) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4 md:mt-8">
      <div className="w-10 h-10 mb-4">
        <div className="icon-content rounded p-2 flex justify-center text-center bg-business-primary text-white w-full h-full">
          <img
            className="text-center align-center"
            src={props.data.icon_url}
            alt={props.data.icon_alt}
          />
        </div>
      </div>
      <div className="text-content w-full md:w-4/5">
        <p className="text-lg md:text-2xl font-bold mb-2">
          {props.data.header}
        </p>
        <p className="text-md md:text-xl text-justify">{props.data.text}</p>
      </div>
    </div>
  );
}

import React from "react";

export default function HeroAboutCard(props) {
  return (
    <div className="flex flex-row mt-8">
      <div className="">
        <div className="rounded-full p-4 justify-center bg-business-secondary text-white"></div>
      </div>
      <div className="text-content mx-2 w-4/5">
        <h2 className="text-3xl font-medium">{props.data.question}</h2>
        <p className="text-2xl">{props.data.answer}</p>
      </div>
    </div>
  );
}

import React from "react";

export default function SubscriptionCard(props) {
  return (
    <div className="flex flex-row space-x-4 items-stretch">
      <div className="relative w-full shadow-sm flex flex-col">
        <div
          className={`${
            props.data.isGray
              ? "bg-[#DFDCDF] text-dark"
              : "bg-business-primary text-white"
          } text-center rounded-t-xl font-semibold py-6 text-xl`}
        >
          <div className="text-center">
            <h3 className="text-lg md:text-2xl font-semibold ">
              {props.data.plan}
            </h3>
            <p className="mt-2 md:mt-4 text-2xl md:text-4xl font-bold tracking-tight">
              {props.data.amount}
            </p>
          </div>
        </div>
        <hr className="border border-1 border-gray-200" />
        <div
          className={`${
            props.data.isGray
              ? "bg-[#F5F3F5] text-dark"
              : "bg-[#7CA4DE] text-white"
          } w-full py-8 px-16 rounded-b-xl relative h-full flex flex-col`}
        >
          <ul className="mt-4 md:mt-6 space-y-4 md:space-y-6">
            {props.data.features.slice(0, 2).map((feat, index) => (
              <li className="flex" key={index}>
                <img
                  src="/img/icons/check-sub.svg"
                  alt="subscription-feature-check"
                />
                <span className="ml-3 text-lg md:text-xl ">{feat}</span>
              </li>
            ))}
          </ul>
          {props.data.hasDiscount && (
            <div className="flex justify-end mt-4 mb-6">
              <button
                type="button"
                className="text-center bg-[#1DB75A] text-lg md:text-xl text-white rounded-full py-2 px-3"
              >
                Save 40%
              </button>
            </div>
          )}
          <div className="mt-auto text-center">
            <a href={process.env.REACT_APP_SIGNUP_URL}>
              <button
                type="button"
                className={`${
                  props.data.isGray
                    ? "p-3 md:py-2 md:px-3 text-center hover:bg-business-primary hover:text-white w-2/3 mx-auto text-business-primary rounded-[30px] text-sm md:text-lg border border-business-primary border-2 focus:ring-business-primary focus:border-business-primary border-opacity-60"
                    : "p-3 md:py-2 md:px-3 text-center bg-business-primary hover:text-businness-primary w-2/3 mx-auto hover:bg-transparent hover:text-business-primary rounded-[30px] text-sm md:text-lg hover:border hover:border-business-primary hover:border-2 focus:ring-business-primary focus:border-business-primary hover:border-opacity-60"
                }`}
              >
                <span className="font-semibold">Get Started</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Duplicate the above div structure for the second card */}
    </div>
  );
}

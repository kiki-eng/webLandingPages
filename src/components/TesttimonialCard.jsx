import React from "react";

export const Testimonial = (props) => {
  return (
    <div className="mt-6 md:mt-8 m-4">
      <blockquote className="rounded-0">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src={props.data.img}
            className="size-12 md:size-16 rounded-full object-cover"
          />
          <div>
            <p className="text-xl md:text-2xl font-medium text-gray-900">
              {props.data.name}
            </p>
          </div>
        </div>

        <p className="mt-2 md:mt-4 text-gray-700 text-lg md:text-2xl">
          {props.data.text}
        </p>
      </blockquote>
    </div>
  );
};

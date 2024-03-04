import React from "react";

export const Testimonial = (props) => {
  return (
    <div className="mt-2">
      <blockquote className="rounded-0 p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src={props.data.img}
            className="size-14 rounded-full object-cover"
          />
          <div>
            <p className="mt-0.5 text-xl font-medium text-gray-900">
              {props.data.name}
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">{props.data.text}</p>
      </blockquote>
    </div>
  );
};

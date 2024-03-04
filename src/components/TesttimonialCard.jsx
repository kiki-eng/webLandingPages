import React from "react";

export const Testimonial = (props) => {
  return (
    <div className="mt-8">
      <blockquote className="rounded-0">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src={props.data.img}
            className="size-16 rounded-full object-cover"
          />
          <div>
            <p className="text-3xl font-medium text-gray-900">
              {props.data.name}
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-700 text-3xl">{props.data.text}</p>
      </blockquote>
    </div>
  );
};

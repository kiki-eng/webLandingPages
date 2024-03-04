import React from "react";
import { Testimonial } from "./TesttimonialCard";

export const Testimonials = () => {
  let props = {};
  props.data = [
    {
      img: "img/testimonials/01.jpg",
      text: "my750hrstracker has been a game-changer for me! I used to spend hours struggling with spreadsheets and paperwork, but now I can effortlessly track my hours and activities.",
      name: "Smith Parvey",
    },
    {
      img: "img/testimonials/02.jpg",
      text: "Since using my750hrstracker, our team has become much more efficient and productive. The centralized management and collaboration tools have made it easier than ever to track our progress and make informed decisions.",
      name: "Johnathan Doe",
    },
    {
      img: "img/testimonials/03.jpg",
      text: "my750hrstracker has been a valuable asset to my real estate business. The user-friendly interface and comprehensive features make it easy to manage all aspects of my REPS.",
      name: "Michael Brown",
    },
    {
      img: "img/testimonials/04.jpg",
      text: "As a real estate investor with multiple properties, managing my REPS was a constant challenge. my750hrstracker has provided me with the tools and resources I need to stay organized and compliant.",
      name: "Sarah Jones",
    },
  ];
  return (
    <div className="my-24 container mx-auto">
      <div className="mt-8 text-left">
        <h2 className="text-2xl font-semibold tracking-tight text-business-secondary">
          Testimonial
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
        <div className="">
          <h2 className="text-business-primary text-5xl font-normal w-full my-8">
            Hear what real estate professionals say about my750hrstracker:
          </h2>
          <div className="text-2xl">
            <p>
              Don't just take our word for it. See what real estate
              professionals like you have to say about their experience with
              my750hrstracker. We're committed to providing our users with the
              tools and resources they need to succeed. Read their stories and
              discover how 750hrs can help you:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Effortlessly manage your REPS</li>
              <li>Maximize your tax benefits</li>
              <li>Increase your productivity and efficiency</li>
              <li>Achieve your real estate goals</li>
            </ul>
          </div>
        </div>
        <div className="">
          <img
            src="img/testimonials.svg"
            className="object-cover"
            alt="testimnoial"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2 my-8">
        {props.data
          ? props.data.map((d, i) => (
              <Testimonial key={`${d.name}-${i}`} data={d} />
            ))
          : "loading"}
      </div>
    </div>
  );
};

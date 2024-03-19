import React from "react";
import SubscriptionCard from "./SubscriptionCard";

export default function Subscription() {
  let data = [
    {
      plan: "Free plan",
      amount: "1 month",
      features: [
        "All features made available",
        "Third party will be able to access or download your files",
        "You wont be able to upload an evidence file",
      ],
    },
    {
      plan: "Monthly plan",
      amount: "$99",
      features: [
        "All features made available",
        "Third party will be able to access or download your files",
        "You wont be able to upload an evidence file",
      ],
    },
    {
      plan: "Yearly plan",
      amount: "$199",
      features: [
        "All features made available",
        "Third party will be able to access or download your files",
        "You wont be able to upload an evidence file",
      ],
    },
  ];
  return (
    <section className="px-4 md:px-0 py-12 md:py-20 mt-16 bg-business-primary">
      <div className="container mx-auto text-white">
        <h2 className="text-2xl my-4 md:my-8">Pricing</h2>
        <h2 className="font-bold text-2xl md:text-4xl w-2/3 md:w-1/4">
          We've got a plan that's perfect for you
        </h2>
      </div>
      <div className="container mx-auto mt-16 md:mt-24 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {data
          ? data.map((d, i) => (
              <SubscriptionCard key={`${d.plan}-${i}`} data={d} />
            ))
          : "loading"}
      </div>
    </section>
  );
}

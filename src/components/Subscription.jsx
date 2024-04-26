import React, { useEffect, useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { getSubscriptions } from "../api/subscriptions";

export default function Subscription() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    getSubscriptions().then((resp) => {
      let data = resp.data.map((item) => {
        return {
          id: item.id,
          plan: item.name,
          amount: `$${item.price}`,
          features: item.features,
        };
      });

      setSubscriptions(data);
    });
  });

  return (
    <section className="px-4 md:px-0 py-12 md:py-20 mt-16 bg-business-primary">
      <div className="container mx-auto text-white">
        <h2 className="text-2xl my-4 md:my-8">Pricing</h2>
        <h2 className="font-bold text-2xl md:text-4xl w-2/3 md:w-1/4">
          We've got a plan that's perfect for you
        </h2>
      </div>
      <div className="container mx-auto mt-16 md:mt-24 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {subscriptions
          ? subscriptions.map((d, i) => (
              <SubscriptionCard key={`${d.id}`} data={d} />
            ))
          : "loading"}
      </div>
    </section>
  );
}

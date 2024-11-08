import React, { useEffect, useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { getSubscriptions } from "../api/subscriptions";

export default function Subscription() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    getSubscriptions().then((resp) => {
      let data = resp.data
        .filter((item) => item.price !== 0)
        .map((item) => {
          return {
            id: item.id,
            plan: item.name,
            amount: `$${item.price}`,
            features: item.features,
            isGray: item.price > 30,
            hasDiscount: item.price > 30,
          };
        });

      setSubscriptions(data);
    });
  });

  return (
    <section id="pricing" className="px-4 md:px-0 py-12 md:py-20 bg-white">
      <div className="container mx-auto">
        <div className="">
          <h2 className="w-full text-center font-bold text-2xl md:text-4xl text-business-primary">
            Subscriptions
          </h2>
          <h4 className="w-full text-center mt-4 text-xl md:text-2xl">
            We've got a plan that's perfect for you
          </h4>
        </div>
        <div className="container mx-auto w-full md:w-4/5 mt-16 mb-16 flex flex-col md:flex-row gap-8">
          {subscriptions
            ? subscriptions.map((d, i) => (
                <SubscriptionCard key={`${d.id}`} data={d} />
              ))
            : "loading"}
        </div>
        <div className="w-full md:w-4/5 text-center mx-auto">
          <h2 className="text-lg md:text-2xl my-6">
            Your account will be billed at the time of purchase confirmation.
            Subscriptions renew automatically unless you disable auto-renewal at
            least 24 hours before the current subscription period ends. Renewal
            charges, based on your selected plan, will be applied within 24
            hours before the end of the current period. After purchase, you can
            adjust or turn off auto-renewal anytime in your account settings.
          </h2>
        </div>
      </div>
    </section>
  );
}

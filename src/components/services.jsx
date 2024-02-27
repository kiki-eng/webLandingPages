import React from "react";

const PricingCard = ({ plan, price, features }) => {
  return (
    <div className="pricing-card">
      <h2>{plan}</h2>
      <p className="price">${price}/month</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Get started</button>
    </div>
  );
};

export const Services = (props) => {
  const pricingData = [
    {
      plan: "Free plan",
      price: "0.00",
      features: [
        "All features made available",
        "Third party wont be able to access or download your files",
        "You wont be able to upload an evidence file",
      ],
    },
    {
      plan: "Monthly plan",
      price: "19.99",
      features: [
        "All features made available",
        "Third party will be able to access or download your files",
        "You will be able to upload an evidence file",
      ],
    },

    {
      plan: "Yearly plan",
      price: "199.00",
      features: [
        "All features made available",
        "Third party wont be able to access or download your files",
        "You will be able to upload an evidence file",
        "$40 discount",
      ],
    },
  ];

  return (
    <div id="services" className=" card text-center">
      <div className="service-header">
        <p className="card-header">Pricing</p>
        <h3 className="card-header">
          We've got a plan <br />
          that's perfect for you
        </h3>
      </div>

      <div className="pricing-cards">
        {pricingData.map((data, index) => (
          <PricingCard
            key={index}
            plan={data.plan}
            price={data.price}
            features={data.features}
          />
        ))}
      </div>
    </div>
  );
};

/*const Services = () => {
  const cardData = [
    {
     
      title: "Single User",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
      
      title: "Double User",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
     
      title: "Triple User",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
  ];
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
          >
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={card.image}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              {card.title}
            </h2>
            <p className="text-center text-4xl font-bold">{card.price}</p>
            <div className="text-center font-medium">
              {card.features.map((feature, index) => (
                <p
                  key={index}
                  className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
                >
                  {feature}
                </p>
              ))}
            </div>
            <button
              className={`bg-[#00df9a] hover:text-[#00df9a] hover:bg-gray-50 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
            >
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;*/

/*<div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>*/

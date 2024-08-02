import FaqCard from "./FaqCard";
import Header from "./Header";
import { Fragment } from "react";
const faqs = [
  {
    question: "What is my750hrstracker?",
    answer:
      "my750hrstracker is your complete Real Estate Professional status solution, designed by CPA’s to simplify compliance with a complex IRS code sector ",
  },
  {
    question: "How does my750hrstracker simplify REPS compliance?",
    answer:
      "Track hours effortlessly with intuitive tools, receive timely alerts to avoid penalties, and access expert guidance for confident navigation of a complex tax regulations. ",
  },
  {
    question: "How does my750hrstracker help maximize tax benefits?",
    answer:
      "App users can unlock advanced tax strategies and personalized advice to maximize deductions and minimize your tax burden, while generating accurate reports for streamlined filing, through our weekly online support calls with CPA’s",
  },
  {
    question: "Is my data secure with my750hrstracker?",
    answer:
      "Absolutely. We utilize secure cloud storage, multiple security layers, and a dedicated security team to safeguard your information. ",
  },
  {
    question: "What are the different pricing plans available?",
    answer:
      "We offer flexible plans catering to investors in real estate whether short term rentals or long term rentals, just starting out or have multiple real estate holdings.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, experience the power of my750hrstracker risk-free with our 14-day free trial.",
  },
];

export default function FaqsSection() {
  return (
    <Fragment>
      <Header />
      <section className="w-full md:w-4/5 mx-auto px-4 md:p-0">
        <div className="hero-img w-full border border-business-primary border-4">
          <img
            src="img/faq-img.png"
            className="w-full object-cover"
            alt="faq_image"
          />
        </div>
        <div className="header w-full my-4">
          <h2 className="text-xl md:text-3xl font-semibold">
            Need something cleared up?
          </h2>
          <h2 className="text-xl md:text-3xl font-semibold">
            Here are out most frequently asked questions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <FaqCard key={`faq-${index}`} data={faq} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}

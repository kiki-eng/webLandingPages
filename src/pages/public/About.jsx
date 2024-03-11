import { Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

export default function About() {
  return (
    <Fragment>
      <Header />
      <section className="lg:relative container mx-auto">
        <div className="header mt-16">
          <h2 className="text-5xl font-bold text-business-primary w-full md:w-1/2">
            Your trusted partner for success in real estate investing
          </h2>
          <p className="font-normal my-8 text-2xl tracking-wider">
            750hrs was born from a simple yet powerful vision: to empower real
            estate professionals and simplify their journey to financial freedom
            using the tax code. We understand the challenges and complexities of
            REPS compliance, managing investments, and maximizing returns.
            That's why we created a comprehensive app that combines cutting-edge
            technology with expert guidance, providing you with everything you
            need to navigate the real estate landscape with confidence.
          </p>
        </div>
        <div className="mission grid grid-cols-1 grid-cols-2 gap-16 my-16">
          <div className="mission text-3xl">
            <h2 className="">Our Mission</h2>
            <ul className="list-disc list-outside mt-4 ml-6 leading-relaxed">
              <li>
                Simplify REPS compliance: Eliminate manual processes and ensure
                accurate records with our intuitive hour and activity tracking
                features.
              </li>
              <li>
                Maximize your tax benefits: Leverage advanced tax strategies and
                personalized advice to minimize your tax burden and keep more of
                your hard-earned money.
              </li>
              <li>
                Optimize your investment management: Gain valuable insights into
                your portfolio performance and make informed decisions based on
                real-time data.
              </li>
              <li>
                Increase your productivity and efficiency: Streamline your
                workflow with our collaborative tools and centralized platform.
              </li>
            </ul>
          </div>
          <div className="hidden md:inline-block bg-gray-200 px-6 py-8 text-center item-center rounded-3xl">
            <img
              src="img/about-stopwatch.png"
              alt="about-missin"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="values grid grid-cols-1 grid-cols-2 gap-16 my-24">
          <div className="text-center item-center">
            <img
              src="img/about-values.png"
              alt="about-values"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-3xl">
            <h2 className="">Our Values</h2>
            <ul className="list-disc list-outside mt-4 ml-6 leading-relaxed">
              <li>
                Innovation: We are constantly innovating and developing new
                features to ensure that 750hrs remains the leading REPS
                management solution.
              </li>
              <li>
                Expertise: Our team of experts is passionate about helping real
                estate professionals succeed. We provide personalized advice and
                support to ensure you are always on the right track.
              </li>
              <li>
                Integrity: We are committed to providing our users with the
                highest quality products and services. We are transparent and
                honest in all of our communications.
              </li>
              <li>
                Customer Focus: We are dedicated to exceeding our customers'
                expectations. We value your feedback and are always working to
                improve the 750hrs experience.
              </li>
            </ul>
          </div>
        </div>

        <ContactSection />
      </section>
      <Footer />
    </Fragment>
  );
}

import { Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

export default function ContactUs() {
  return (
    <Fragment>
      <Header />
      <section className="lg:relative container mx-auto px-4 md:p-0">
        <div className="header mt-8 md:mt-16">
          <h2 className="text-3xl md:text-5xl font-semibold md:font-bold text-business-primary w-full text-center">
            You want to reach us?
          </h2>
          <h4 className="text-lg md:text-2xl font-normal md:font-bold text-business-primary w-full text-center">
            If you have any unanswered questions, please let us know. Here are
            easy ways to contact us. Simply call, email, fax, write or just stop
            by.
          </h4>
          <div className="w-full md:w-3/5 mx-auto my-12 text-xl space-y-4 font-semibold">
            <div className="grid grid-cols-[1fr,2fr] space-x-2">
              <span>Email Address:</span>
              <span>
                <a href="mailto:appsupport@my750hrstracker.com">
                  {process.env.REACT_APP_CONTACT_EMAIL}
                </a>
              </span>
            </div>
            <div className="grid grid-cols-[1fr,2fr] space-x-2">
              <span>Phone Number:</span>
              <span>
                <a href={`tel:${process.env.REACT_APP_CONTACT_PHONE}`}>
                  {process.env.REACT_APP_CONTACT_PHONE}
                </a>
              </span>
            </div>
            <div className="grid grid-cols-[1fr,2fr] space-x-2">
              <span>Address: </span>
              <span>{process.env.REACT_APP_CONTACT_ADDRESS}</span>
            </div>
          </div>
        </div>

        <ContactSection />
      </section>
      <Footer />
    </Fragment>
  );
}

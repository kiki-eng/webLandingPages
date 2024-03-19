import ContactFrom from "./ContactForm";

export default function ContactSection() {
  return (
    <section>
      <div className="">
        <h2 className="text-2xl mt-4 md:mt-8 font-semibold text-business-secondary">
          Contact us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="">
          <h2 className="text-xl md:text-3xl font-semibold mt-4  md:mt-6">
            Get in touch
          </h2>
          <p className="text-md md:text-xl my-4 md:my-8">
            Our friendly team would love to hear from you
          </p>

          <div className="w-full md:w-4/5">
            <ContactFrom />
          </div>
        </div>
        <div className="hidden md:inline-block text-center item-center">
          <img
            src="img/contact-us.png"
            alt="contact-us"
            className="object-cover w-full h-full border border-4 rounded-3xl border-business-secondary"
          />
        </div>
      </div>
    </section>
  );
}

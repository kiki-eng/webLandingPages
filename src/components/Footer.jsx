import { Link } from "react-router-dom";

const navigation = {
  product: [
    { name: "Overview", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ],
  company: [
    { name: "About us", href: "/about", external: false },
    { name: "Contact", href: "/contact-us", external: false },
    { name: "Privacy Policy", href: "/privacy-policy", external: false },
    {
      name: "Terms & Conditions",
      href: "/terms-and-conditions",
      external: false,
    },
    {
      name: "End User License Agreement (EULA)",
      href: "/eula",
      external: false,
    },
  ],
  resources: [{ name: "Support", href: "/contact-us", external: false }],
  social: [
    {
      name: "Facebook",
      href: `${process.env.REACT_APP_FACEBOOK_URL}`,
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: `${process.env.REACT_APP_INSTAGRAM_URL}`,
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // {
    //   name: "Twitter",
    //   href: "https://twitter.com/750hrstracker/",
    //   icon: (props) => (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       shapeRendering="geometricPrecision"
    //       textRendering="geometricPrecision"
    //       imageRendering="optimizeQuality"
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       viewBox="0 0 512 462.799"
    //       {...props}
    //     >
    //       <path
    //         fillRule="nonzero"
    //         d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
    //         fill="currentColor"
    //       />
    //     </svg>
    //   ),
    // },
    {
      name: "LinkedIn",
      href: `${process.env.REACT_APP_LINKEDIN_URL}`,
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: `${process.env.REACT_APP_YOUTUBE_URL}`,
      icon: (props) => (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
  bottomLinks: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white text-xl" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div
        id="newsletter"
        className="container px-4 py-12 mx-auto space-y-16 sm:px-6 lg:py-16 lg:px-8"
      >
        <div className="justify-between w-full space-y-6 lg:flex lg:space-y-0">
          <div className="w-full">
            <h2 className="font-bold text-xl leading-10">
              Join our newsletter
            </h2>
            <h2>We'll send you a nice letter once per week. No spam.</h2>
          </div>

          <div className="flex flex-col items-center justify-center w-full space-x-0 space-y-6 lg:justify-end lg:space-x-3 lg:flex-row lg:space-y-0">
            <input
              type="email"
              className="py-3 pl-6 rounded-[30px] text-sm placeholder:text-sm placeholder:font-normal border border-business-primary border-2 w-full lg:w-64 focus:ring-business-primary focus:border-business-primary border-opacity-60 placeholder-business-primary bg-gray-50"
              placeholder="Enter your email"
            />
            <button
              type="button"
              className="inline-flex items-center text-white px-16 py-3 font-medium bg-business-primary hover:bg-business-secondary transition-colors border border-0 duration-150 ease-in-out rounded-[30px]"
            >
              Subscribe
            </button>
          </div>
        </div>
        <hr className="border border-gray-400 border-1 p-0 m-0" />

        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 md-grid-cols-3 gap-4 md:gap-8 mt-12 xl:mt-0 xl:col-span-4">
            <div className="md:grid md:grid-cols-3 col-span-2 md:gap-8">
              <div>
                <h3 className="text-xl font-semibold tracking-wider ">
                  Product
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-md font-normal tracking-normal transition-colors duration-150  hover:text-opacity-70 hover:font-semibold"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 md:mt-0">
                <h3 className="text-xl font-semibold tracking-wider ">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      {item.external ? (
                        <a
                          href={item.href}
                          rel="noopener"
                          className="text-md font-normal tracking-normal transition-colors duration-150  hover:text-opacity-70 hover:font-semibold"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-md font-normal tracking-normal transition-colors duration-150  hover:text-opacity-70 hover:font-semibold"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-xl font-semibold tracking-wider ">
                  Resource
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      {item.external ? (
                        <a
                          href={item.href}
                          rel="noopener"
                          className="text-md font-normal tracking-normal transition-colors duration-150  hover:text-opacity-70 hover:font-semibold"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-md font-normal tracking-normal transition-colors duration-150  hover:text-opacity-70 hover:font-semibold"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div className="mt-12 md:mt-0">
                <h3 className="text-xl font-semibold tracking-wider ">
                  Stay connected
                </h3>
                <div className="flex mt-4 space-x-6">
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className=" hover:text-opacity-70 hover:font-semibold"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 space-y-4 text-center lg:space-y-0 lg:text-left lg:flex lg:justify-center">
          {/* <div className="flex justify-center space-x-4 lg:justify-start">
            {navigation.bottomLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                rel="noopener"
                className="text-sm font-normal tracking-normal transition-colors duration-150  hover:text-opacity-70"
              >
                {item.name}
              </a>
            ))}
          </div> */}
          <div>
            <p className="text-sm font-normal  xl:text-center">
              &copy; All Rights Reserved. My750HrsTracker.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

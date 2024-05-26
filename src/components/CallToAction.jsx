export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 mt-8 md:mt-16 bg-business-secondary">
      <div className="container flex flex-col mx-auto space-y-10 text-center">
        <div className="w-5/6 md:w-7/8 justify-center mx-auto text-white">
          <h2 className="font-semibold text-3xl md:text-6xl">
            Are you ready to take your real estate business to the next level?
          </h2>
          <h2 className="font-semibold text-xl md:text-4xl mt-3 md:mt-4">
            Join 1,500+ users in minimizing risks, saving time and maximizing
            profits
          </h2>
        </div>
        <div className="text-white flex flex-col md:flex-row mx-auto w-2/3 md:w-5/6 justify-center ">
          <button
            type="button"
            className="hover:bg-business-primary py-2 md:py-4 px-4 md:px-6 md:mx-6 rounded-[30px] text-sm border border-business-primary border-2 w-full lg:w-64 focus:ring-business-primary focus:border-business-primary border-opacity-60"
          >
            <div className="flex flex-row justify-between w-full text-white text-lg">
              <div
                className="grid grid-cols-2 divide-x-4 divide-white mr-3
            "
              >
                <div className="flex text-right inline-block align-middle">
                  <img src="/img/icons/apple_icon.svg" alt="apple-store-logo" />
                </div>
                <div className="flex text-right inline-block align-middle">
                  <img
                    className="ml-1.5"
                    src="/img/icons/playstore_icon.svg"
                    alt="play-store-logo"
                  />
                </div>
              </div>
              <div className="">
                <span className="font-semibold">Download app</span>
              </div>
            </div>
          </button>
          <a
            target="_blank"
            href={process.env.REACT_APP_SIGNUP_URL}
            rel="noreferrer"
          >
            <button
              type="button"
              className="inline-block align-middle mt-4 md:mt-0 items-center px-16 md:px-20 py-2 md:py-4 font-medium bg-business-primary hover:bg-business-secondary transition-colors border border-0 hover:border-2 hover:border-business-primary duration-150 ease-in-out rounded-[30px]"
            >
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

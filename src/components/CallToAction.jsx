export default function CallToAction() {
  return (
    <section className="py-20 mt-16 bg-business-secondary">
      <div className="container flex flex-col mx-auto space-y-10 text-center sm:px-6 lg:px-8">
        <div className="w-5/6 justify-center mx-auto text-white">
          <h2 className="font-bold text-4xl leading-2">
            Are you ready to take your real estate business to the next level?
          </h2>
          <h2 className="font-semibold text-2xl mt-2 ">
            Join 1,500+ users in minimizing risks, saving time and maximizing
            profits
          </h2>
        </div>
        <div className="text-white flex mx-auto w-5/6 justify-center">
          <button
            type="button"
            className="py-2 pl-6 pr-4 mx-6 text-left rounded-[30px] text-sm border border-business-primary border-2 w-full lg:w-64 focus:ring-business-primary focus:border-business-primary border-opacity-60"
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
          <button
            type="button"
            className="inline-flex items-center px-16 py-2 font-medium bg-business-primary hover:bg-business-secondary transition-colors border border-0 duration-150 ease-in-out rounded-[30px]"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

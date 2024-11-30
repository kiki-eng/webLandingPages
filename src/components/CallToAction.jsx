export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-business-secondary">
      <div className="container flex flex-col mx-auto space-y-10 text-center">
        <div className="w-5/6 md:w-7/8 justify-center mx-auto text-white">
          <h2 className="font-semibold text-2xl md:text-4xl">
            Are you ready to take your real estate business to the next level?
          </h2>
          <h2 className="font-semibold text-lg md:text-2xl mt-3 md:mt-4">
            Join 1,500+ users in minimizing risks, saving time and maximizing
            profits
          </h2>
        </div>
        <div className="text-white flex flex-col md:flex-row mx-auto w-2/3 md:w-3/5 justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a href={process.env.REACT_APP_APPLE_DOWNLOAD_URL} className="">
            <button
              type="button"
              className="mx-auto md:mx-0 flex justify-center items-center w-56 md:w-64 hover:bg-business-primary py-2 md:py-4 rounded-[30px] border border-business-primary border-2 focus:ring-business-primary focus:border-business-primary border-opacity-60"
            >
              <div className="flex flex-row justify-center w-full text-white">
                <div className="grid grid-cols-2 divide-x-4 divide-white mr-3">
                  <div className="flex text-right">
                    <img
                      src="/img/icons/apple_icon.svg"
                      className="size-6"
                      alt="apple-store-logo"
                    />
                  </div>
                  <div className="flex text-right">
                    <img
                      className="ml-1.5 size-6"
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
          </a>
          <a
            target="_blank"
            href={process.env.REACT_APP_SIGNUP_URL}
            rel="noreferrer"
            className="w-56 md:w-64 mx-auto md:mx-0"
          >
            <button
              type="button"
              className="flex justify-center items-center w-full py-2 md:py-4 bg-business-primary hover:bg-business-secondary transition-colors border border-0 hover:border-2 hover:border-business-primary duration-150 ease-in-out rounded-[30px]"
            >
              <span className="font-semibold">Get Started</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

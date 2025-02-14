import { Transition } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { sendSupportMessage } from "../api/support";

export default function ContactFrom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionResponse, setSubmissionResponse] = useState("");

  const formRef = useRef(null);
  const onSubmit = (values) => {
    sendSupportMessage(values).then((data) => {
      setSubmissionResponse(data.message);
      setSubmissionSuccess(true);
      if (formRef.current) {
        formRef.current.reset();
      }
      setTimeout(() => {
        setSubmissionSuccess(false);
      }, 3000);
    });
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [formRef]);

  return (
    <section className="lg:pt-6">
      <div className="">
        <Transition
          appear={true}
          show={true}
          enter="transform ease-out duration-600 transition delay-200"
          enterFrom="transform opacity-0 scale-95 duration-200"
          enterTo="transform scale-100 opacity-100 duration-500"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {submissionSuccess ? (
            <div>{submissionResponse}. You will contacted shortly.</div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
              <div className="flex flex-col space-y-6 md:space-y-10 w-full">
                <div className="input-group">
                  <h2 className="font-normal text-md md:text-xl">First name</h2>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="p-2 md:p-4 rounded-md border border-business-primary border-2 text-md placeholder:text-md placeholder:font-light w-full focus:ring-2 focus:ring-business-secondary focus:border-business-primary"
                      placeholder="John"
                      {...register("firstname", {
                        required: true,
                      })}
                    />
                    <span className="pt-2 ml-3 text-md font-light text-red-600">
                      {errors.firstname?.type === "required" && (
                        <span>Please enter your first name.</span>
                      )}
                    </span>
                  </div>
                </div>
                <div className="input-group">
                  <h2 className="font-normal text-md md:text-xl">Last name</h2>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="p-2 md:p-4 rounded-md border border-business-primary border-2 text-md placeholder:text-md placeholder:font-light w-full focus:ring-2 focus:ring-business-secondary focus:border-business-primary"
                      placeholder="Doe"
                      {...register("lastname", {
                        required: true,
                      })}
                    />
                    <span className="pt-2 ml-3 text-md font-light text-red-600">
                      {errors.lastname?.type === "required" && (
                        <span>Please enter your last name.</span>
                      )}
                    </span>
                  </div>
                </div>
                <div className="input-group">
                  <h2 className="font-normal text-md md:text-xl">Email</h2>
                  <div className="mt-2">
                    <input
                      type="email"
                      className="p-2 md:p-4 rounded-md border border-business-primary border-2 text-md placeholder:text-md placeholder:font-light w-full focus:ring-2 focus:ring-business-secondary focus:border-business-primary"
                      placeholder="johndoe@gmail.com"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      })}
                    />
                    <span className="pt-2 ml-3 text-md font-light text-red-600">
                      {errors.email?.type === "required" && (
                        <span>Please provide an email address.</span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span>Please enter a valid email address.</span>
                      )}
                    </span>
                  </div>
                </div>
                <div className="input-group">
                  <h2 className="font-normal text-md md:text-xl">Message</h2>
                  <div className="mt-2">
                    <textarea
                      rows="5"
                      className="p-2 md:p-4 rounded-md border border-business-primary border-2 text-md placeholder:text-md placeholder:font-light w-full focus:ring-2 focus:ring-business-secondary focus:border-business-primary"
                      placeholder="Type message here"
                      {...register("message", {
                        required: true,
                      })}
                    />
                    <span className="pt-2 ml-3 text-md font-light text-red-600">
                      {errors.message?.type === "required" && (
                        <span>Message is required.</span>
                      )}
                    </span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="mt-2">
                    <input
                      id="terms"
                      type="checkbox"
                      className="rounded-sm border border-business-primary border-2 text-md focus:ring-2 focus:ring-business-secondary focus:border-business-primary"
                      {...register("terms", {
                        required: true,
                      })}
                    />
                    <label
                      htmlFor="terms"
                      className="align-middle text-sm md:text-lg ml-4"
                    >
                      I agree to my750hrstracker's{" "}
                      <a
                        href="/"
                        className="text-business-primary underline italic"
                      >
                        terms and conditions
                      </a>
                    </label>
                    <span className="pt-2 ml-3 text-md font-light text-red-600">
                      {errors.lastname?.type === "required" && (
                        <span>
                          Kindly accept the terms and conditions to continue
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-4/5 text-white px-16 md:py-20 py-2 md:py-4 font-medium bg-business-primary hover:bg-business-secondary transition-colors border hover:border-business-primary hover:border-2 border-0 duration-150 ease-in-out rounded-[30px]"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          )}
        </Transition>
      </div>
    </section>
  );
}

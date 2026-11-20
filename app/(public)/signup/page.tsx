"use client";

import Logo from "@/components/cell/Logo";
import { useState } from "react";
import { accountTypes } from "@/data";
import { FaCheckCircle } from "react-icons/fa";
import AccountTypeCard from "@/components/card/AccountTypeCard";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";

import clsx from "clsx";
import PryButton from "@/components/buttons/PryButton";

const Page = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAccountType, setSelectedAccountType] = useState<
    "individual" | "business" | null
  >(null);
  const isAccountTypeSelected = selectedAccountType !== null;
  const isFormFilled = Boolean(selectedAccountType);

  const handleAccountTypeSelect = (accountType: string) => {
    setSelectedAccountType(accountType as "individual" | "business");
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !isAccountTypeSelected) {
      toast.error("Please select an account type before proceeding.");
      return;
    }
  };

  return (
    <div className=" flex text-gray-500 flex-row grid-cols-2 items-center justify-center ">
      <div className="py-14 p-6 flex flex-col gap-4 h-max w-full max-w-xl mx-auto ">
        <Logo />
        <div className="">
          <h1 className=" mb-3 text-black text-2xl font-semibold ">
            Create an account
          </h1>
          <p className="">
            Give us a few details and start creating events on TicketDays{" "}
          </p>
        </div>
        <div className=" flex gap-2">
          {signupSteps.map((step) => (
            <div
              key={step.step}
              className={clsx(
                `flex items-center text-base font-medium  gap-2 mb-4 `,
                currentStep >= step.step ? "text-primary" : " text-gray-600",
              )}
            >
              <div
                className={clsx(
                  " border-b  w-10 ",
                  step.step <= 1
                    ? "hidden"
                    : step.step <= currentStep
                      ? "border-primary"
                      : "border-gray-200",
                )}
              />
              <div className="">
                {currentStep >= step.step ? (
                  <FaCheckCircle className="size-5 text-primary " />
                ) : (
                  <div className="size-4 rounded-full  border border-gray-400 bg-white" />
                )}
              </div>
              <div className="">{step.title}</div>
            </div>
          ))}
        </div>

        <div className="">
          <div className=" flex flex-col gap-4">
            {currentStep === 1 && (
              <div className=" flex flex-col gap-4">
                <h4 className="text-sm font-semibold text-black">
                  Choose your account type
                </h4>
                <div className="flex justify-between gap-4">
                  {accountTypes.map((type) => (
                    <AccountTypeCard
                      key={type.id}
                      accountType={type.accountType}
                      description={type.description}
                      Icon={type.icon}
                      selected={selectedAccountType === type.id}
                      setSelected={(selected) => {
                        if (selected) {
                          setSelectedAccountType(
                            type.type as "individual" | "business",
                          );
                        } else {
                          setSelectedAccountType(null);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            {currentStep === 1 && (
              <div className="flex w-full gap-4 items-center justify-between">
                <button
                  onClick={() => router.push("/")}
                  className=" cursor-pointer bg-primary/20 text-primary px-4 py-3h h-12 min-w-1/2 rounded-md  hover:bg-primary-dark transition-colors duration-300"
                >
                  cancel
                </button>
                <PryButton
                  onClick={() => setCurrentStep(currentStep + 1)}
                  text="continue"
                  className={
                    isAccountTypeSelected
                      ? "min-w-1/2 bg-primary lg:max-w-1/2"
                      : "min-w-1/2 bg-gray-200 text-gray-600 cursor-not-allowed"
                  }
                />
              </div>
            )}
          </div>
          <div className="">
            {currentStep === 2 && (
              <div className=" flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="location">
                    <span className="text-red-500">*</span> Location of event
                  </label>
                  <select
                    name="location"
                    id="location"
                    className="outline-none border border-gray-300 rounded-md p-2 h-11"
                  >
                    <option value="">Select a location</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="ghana">Ghana</option>
                    <option value="uk">UK</option>
                  </select>
                </div>
                {selectedAccountType === "individual" ? (
                  <div className="flex flex-col gap-4 ">
                    <div className=" flex flex-col gap-2">
                      <label htmlFor="fname">
                        <span className="text-red-500">*</span> First name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        placeholder="First name"
                        className="outline-none border border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div className=" flex flex-col gap-2">
                      <label htmlFor="mname">Middle name (optional)</label>
                      <input
                        type="text"
                        id="mname"
                        placeholder="Middle name"
                        className="outline-none border border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div className=" flex flex-col gap-2">
                      <label htmlFor="lname">
                        <span className="text-red-500">*</span> Last name
                      </label>
                      <input
                        type="text"
                        id="lname"
                        placeholder="Last name"
                        className="outline-none border border-gray-300 rounded-md p-2"
                      />
                    </div>
                  </div>
                ) : (
                  <div className=" flex flex-col gap-2">
                    <label htmlFor="orgname">
                      <span className="text-red-500">*</span> Organization name
                    </label>
                    <input
                      type="text"
                      id="orgname"
                      placeholder="Organization name"
                      className="outline-none border border-gray-300 rounded-md p-2"
                    />
                  </div>
                )}
                <div className=" flex flex-col gap-2">
                  <label htmlFor="email">
                    <span className="text-red-500">*</span> Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email address"
                    className="outline-none border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="password">
                    <span className="text-red-500">*</span> Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="outline-none border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="password">
                    <span className="text-red-500">*</span> Confirm password
                  </label>
                  <input
                    type="password"
                    id="cpassword"
                    placeholder="Confirm password"
                    className=" outline-none border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="how">
                    How did you hear about TicketDays?
                  </label>
                  <input
                    type="text"
                    id="how"
                    placeholder="How did you hear about us?"
                    className="outline-none border border-gray-300 rounded-md p-2"
                  />
                </div>
                <p className="p-4 rounded-xl bg-gray-100 text-gray-600">
                  {" "}
                  By clicking Sign up, I agree to the Tix Terms and Conditions
                  and Privacy Policy.
                </p>
              </div>
            )}

            <div className="">
              {currentStep === 2 && (
                <div className="flex w-full gap-4 items-center justify-between">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className=" cursor-pointer bg-primary/20 text-primary px-4 py-3h h-12 min-w-1/2 rounded-md  hover:bg-primary-dark transition-colors duration-300"
                  >
                    Back
                  </button>
                  <PryButton
                    onClick={() => setCurrentStep(currentStep + 1)}
                    text="Sign up"
                    className={
                      isFormFilled
                        ? "min-w-1/2 bg-primary lg:max-w-1/2  cursor-pointer"
                        : "min-w-1/2 bg-gray-200 text-gray-600 cursor-not-allowed"
                    }
                  />
                </div>
              )}
            </div>
          </div>
          <div className="">
            {currentStep === 3 && (
              <div className=" flex flex-col gap-4">
                <p>
                  We have sent a confirmation email to your email address.
                  Please check your inbox and click on the confirmation link to
                  verify your email.
                </p>
              </div>
            )}
            {currentStep === signupSteps.length && (
              <div className="flex w-full gap-4 items-center justify-between">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="cursor-pointer bg-primary/20 text-primary px-4 py-3h h-12 min-w-1/2 rounded-md  hover:bg-primary-dark transition-colors duration-300"
                >
                  Back
                </button>
                <PryButton
                  text="Finish"
                  onClick={() => toast.success("Account created!")}
                  className=" bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=" max-w-xl w-1/2  ">
        <Image
          src="/bg/bg-3686.avif"
          alt="signup"
          width={500}
          height={500}
          className="max-w-2xl w-full h-screen object-cover center fixed top-0 "
        />
      </div>
    </div>
  );
};

const signupSteps = [
  {
    step: 1,
    title: "Type of account",
    component: "AccountType",
  },
  {
    step: 2,
    title: "About you",
    component: "AboutYou",
  },
  {
    step: 3,
    title: "Email confirmation",
    component: "EmailVerification",
  },
];
export default Page;

"use client";

import Logo from "@/components/cell/Logo";
import { useState } from "react";
import { accountTypes } from "@/data";
import { FaCheckCircle } from "react-icons/fa";
import AccountTypeCard from "@/components/card/AccountTypeCard";

import clsx from "clsx";
import PryButton from "@/components/buttons/PryButton";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAccountType, setSelectedAccountType] = useState<string | null>(null);

  return (
    <div className=" flex text-gray-500 flex-row grid-cols-2 items-center justify-center h-screen">
      <div className=" p-6 flex flex-col gap-4">
        <Logo />
        <div className="">
          <h1 className=" mb-3 text-black text-2xl font-semibold ">
            Create an account
          </h1>
          <p className="">
            Give us a few details and start creating events on TicketDays{" "}
          </p>
        </div>
        <div className=" flex gap-4">
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
                        setSelectedAccountType(type.id);
                      } else {
                        setSelectedAccountType(null);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className=" flex flex-col gap-4">
              <div className=" flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className=" border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className=" border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className=" border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className=" flex flex-col gap-4">
              <p>
                We have sent a confirmation email to your email address. Please
                check your inbox and click on the confirmation link to verify
                your email.
              </p>
            </div>
          )}
        </div>
        <div className=" flex gap-4 ">
          {currentStep > 1 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className=" bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300"
            > 
              Back
            </button>
          )}
          {currentStep < signupSteps.length && (
            <div className="flex w-full gap-4 items-center justify-between">

            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className=" bg-primary/20 text-primary px-4 py-3h h-12 min-w-1/2 rounded-md  hover:bg-primary-dark transition-colors duration-300"
            > 
              cancel
            </button>
            <PryButton text="continue" className="min-w-1/2 max-w-1/2" />
            </div>
          )}
          {currentStep === signupSteps.length && (
            <button
              onClick={() => alert("Account created!")}
              className=" bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              Create Account
            </button>
          )}
        </div>

      </div>

      <div className=" w-1/2 "></div>
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

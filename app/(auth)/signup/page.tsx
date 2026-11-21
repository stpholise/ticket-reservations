"use client";

import Logo from "@/components/cell/Logo";
import { useState } from "react";
import { accountTypes } from "@/data";
import { FaCheckCircle } from "react-icons/fa";
import AccountTypeCard from "@/components/card/AccountTypeCard";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignupValues } from "@/types";
import FormInput from "@/components/cell/FormInput";
import * as Yup from "yup";

import clsx from "clsx";
import PryButton from "@/components/buttons/PryButton";

export const signupSchema = Yup.object({
  accountType: Yup.string()
    .oneOf(["individual", "business"])
    .required("Select an account type"),

  location: Yup.string().required("Please select your location"),

  firstName: Yup.string().when("accountType", {
    is: "individual",
    then: (schema) => schema.trim().required("First name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  middleName: Yup.string().notRequired(),

  lastName: Yup.string().when("accountType", {
    is: "individual",
    then: (schema) => schema.trim().required("Last name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  organizationName: Yup.string().when("accountType", {
    is: "business",
    then: (schema) => schema.trim().required("Business name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),

  how: Yup.string().notRequired(),
});

const Page = () => {
  const initialValues: SignupValues = {
    accountType: "",
    location: "",
    firstName: "",
    middleName: "",
    lastName: "",
    organizationName: "",
    email: "",
    password: "",
    confirmPassword: "",
    how: "",
  };
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const validateCurrentStep = async (values: SignupValues) => {
    const fieldsByStep: Record<number, string[]> = {
      1: ["accountType"],
      2: [
        "location",
        ...(values.accountType === "individual"
          ? ["firstName", "lastName"]
          : ["organizationName"]),
        "email",
        "password",
        "confirmPassword",
      ],
    };

    const fields = fieldsByStep[currentStep] ?? [];
    const errors: Record<string, string> = {};

    for (const field of fields) {
      try {
        await (Yup.reach(signupSchema, field) as Yup.Schema).validate(
          values[field as keyof SignupValues],
          { context: values },
        );
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          errors[field] = error.message;
        }
      }
    }

    return errors;
  };

  const handleSubmit = async (values: SignupValues) => {
    try {
      console.log("Form submitted:", values);

      // Send values to your registration API here.

      setCurrentStep(3);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      toast.error("Something went wrong. Please try again.");
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

        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={signupSchema}
          className=""
        >
          {({ values, setFieldValue, isValid, isSubmitting, dirty }) => {
            const isAccountTypeSelected = Boolean(values.accountType);
            return (
              <Form className="flex flex-col gap-4">
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
                            selected={values.accountType === type.id}
                            setSelected={(selected) => {
                              if (!selected) return;

                              const accountType = type.type as
                                | "individual"
                                | "business";

                              setFieldValue("accountType", accountType);

                              if (accountType === "business") {
                                setFieldValue("firstName", "");
                                setFieldValue("middleName", "");
                                setFieldValue("lastName", "");
                              } else {
                                setFieldValue("organizationName", "");
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
                        onClick={() => setCurrentStep(2)}
                        text="continue"
                        className={
                          isAccountTypeSelected
                            ? "min-w-1/2 bg-primary lg:max-w-1/2"
                            : "min-w-1/2 bg-gray-200 text-gray-600 cursor-not-allowed"
                        }
                        disabled={!isAccountTypeSelected}
                      />
                    </div>
                  )}
                </div>
                <div className="">
                  {currentStep === 2 && (
                    <div className=" flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="location">
                          <span className="text-red-500">*</span> Location of
                          event
                        </label>

                        <Field
                          as="select"
                          name="location"
                          id="location"
                          className="outline-none border border-gray-300 rounded-md p-2 h-11"
                        >
                          <option value="">Select a location</option>
                          <option value="nigeria">Nigeria</option>
                          <option value="ghana">Ghana</option>
                          <option value="uk">UK</option>
                        </Field>

                        <ErrorMessage
                          name="location"
                          component="p"
                          className="text-sm text-red-500"
                        />
                      </div>
                      {values.accountType === "individual" ? (
                        <div className="flex flex-col gap-4">
                          <FormInput
                            name="firstName"
                            label="First name"
                            placeholder="First name"
                            required
                          />

                          <FormInput
                            name="middleName"
                            label="Middle name"
                            placeholder="Middle name"
                          />

                          <FormInput
                            name="lastName"
                            label="Last name"
                            placeholder="Last name"
                            required
                          />
                        </div>
                      ) : (
                        <FormInput
                          name="organizationName"
                          label="Organization name"
                          placeholder="Organization name"
                          required
                        />
                      )}

                      <FormInput
                        name="email"
                        label="Email address"
                        placeholder="Email address"
                        required
                      />
                      <FormInput
                        name="password"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        required
                      />
                      <FormInput
                        name="confirmPassword"
                        label="Confirm password"
                        placeholder="Confirm password"
                        type="password"
                        required
                      />
                      <FormInput
                        name="how"
                        label="How did you hear about TicketDays?"
                        placeholder="How did you hear about us?"
                      />

                      <p className="p-4 rounded-xl bg-gray-100 text-gray-600">
                        {" "}
                        By clicking Sign up, I agree to the Tix Terms and
                        Conditions and Privacy Policy.
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
                          type="submit"
                          text="Sign up"
                          className={
                            (isValid && dirty && !isSubmitting)
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
                        Please check your inbox and click on the confirmation
                        link to verify your email.
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
                        onClick={() => {
                          toast.success("Account created!");
                          router.push("/");
                        }}
                        className=" bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
                      />
                    </div>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
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

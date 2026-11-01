import { companyLinks, socialLinks } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" px-4 md:px-18 xl:gap-26 py-16 text-black bg-amber-50 flex flex-col gap-18">
      <div className=" flex md:flex-row flex-col  justify-between gap-22">
        <div className=" max-w-sm flex flex-col gap-4">
          <Link
            href={"/"}
            aria-label="TicketDays Home"
            className="font-helvetica text-primary"
          >
            <p className="  mb-3 text-xl font-medium">TicketDays</p>
          </Link>
          <p className=" w-full text-gray-800">
            Sign up to our newsletter to receive information about upcoming
            events
          </p>

          <div className=" flex  gap-4  w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className=" border border-gray-600 rounded-md  p-3 outline-none w-8/12"
            />
            <button
              type="button"
              className="rounded-md bg-primary text-white py-3 px-4"
            >
              {" "}
              Subscribe
            </button>
          </div>
        </div>
        <div className=" flex md:flex-row flex-col gap-22 lg:gap-30 justify-between">
          <div className=" flex flex-col gap-4">
            <h4 className="text-primary font-semibold mb-3"> Company</h4>
            {companyLinks.map((value, i) => (
              <Link href={value.href} key={i}>
                {" "}
                {value.label}
              </Link>
            ))}
          </div>
          <div className=" flex flex-col gap-4">
            <h4 className="text-primary font-semibold mb-3"> Follow Us</h4>
            {socialLinks.map((value, i) => {
              const Icon = value.icon;
              return (
                <Link
                  href={value.href}
                  key={i}
                  className="flex items-center gap-3"
                >
                  {" "}
                  <Icon className="size-5" /> {value.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" flex  flex-col md:flex-row md:items-center justify-between text-sm md:gap-22 gap-4 pt-6 border-t md:border-t-0 ">
        {" "}
        <p className="text-gray-500">
          {" "}
          Copyright &copy; 2026 TicketDays Technology Ltd All rights reserved
        </p>
        <div className="flex md:flex-row flex-col items-start md:justify-between gap-3 md:gap-16">
          {" "}
          <button className="">Terms & Conditions</button>
          <button className="">Privacy Policy</button>
          <button className="">Refund Policy</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

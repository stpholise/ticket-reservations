import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      aria-label="TicketDays Home"
      className="font-helvetica text-primary"
    >
      <p className=" py-2 px-4 md:px-0 text-xl md:text-2xl font-medium">
        TicketDays
      </p>
    </Link>
  );
};

export default Logo;

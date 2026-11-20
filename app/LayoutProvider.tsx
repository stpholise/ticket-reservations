"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/layout/Footer";
import HeaderWrapper from "@/components/cell/HeaderWrapper";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div>
      {/* <HeaderWrapper /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default LayoutProvider;

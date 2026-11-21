import React from "react";
import HeaderWrapper from "@/components/cell/HeaderWrapper";
import Footer from "@/components/layout/Footer";

const PublicLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <div>
      <HeaderWrapper />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;

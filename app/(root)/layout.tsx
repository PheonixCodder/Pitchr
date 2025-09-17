import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="font-work-sans">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;

"use client";
import React from "react";
import BookNowButton from "@/components/common/BookNowButton";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <BookNowButton />
    </div>
  );
};

export default PageWrapper;

import React, { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BookNowButton from "@/components/common/BookNowButton";

const MainLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-background text-foreground">{children}</main>
      <Footer />
      <BookNowButton />
    </div>
  );
};

export default MainLayout;

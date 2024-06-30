import React, { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Floks- Video Meetings",
  description: "A video conference tool created by jayachandra in 2024",
  icons: {
    icon: "/images/logo-new.svg",
  },
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
      Footer
    </main>
  );
}

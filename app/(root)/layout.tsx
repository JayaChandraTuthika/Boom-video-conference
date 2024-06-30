import StreamVideoProvider from "@/providers/StremClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Floks- Video Meetings",
  description: "A video conference tool created by jayachandra in 2024",
  icons: {
    icon: "/images/logo-new.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}

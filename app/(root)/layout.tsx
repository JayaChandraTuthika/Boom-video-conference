import StreamVideoProvider from "@/providers/StremClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Boom",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}

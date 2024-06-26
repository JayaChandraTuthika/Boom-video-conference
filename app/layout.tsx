import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/toaster";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import NotFound from "./not-found";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Floks- Video Meetings",
  description: "A video conference tool created by jayachandra in 2024",
  icons: {
    icon: "/images/logo-new.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/images/floks-logo-full.svg",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252a41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          {/* <NotFound /> */}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}

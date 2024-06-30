import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/logo-new.svg"
          width={32}
          height={32}
          alt="Floks Logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Floks
        </p>
      </Link>
      <div className="flex-between gap-5">
        {/* {clerk user management} */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* <SignedOut>
          <SignInButton/>
        </SignedOut> */}
        <MobileNav />
      </div>
    </div>
  );
}

export default Navbar;

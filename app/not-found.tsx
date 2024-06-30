"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();
  return (
    <section className="flex size-full flex-col h-screen justify-center align-middle gap-10 text-white">
      <p className="text-center">Page not found | 404</p>
      <button
        className="inline w-[130px] border-white return-home-btn-nf"
        style={{ alignSelf: "center" }}
        onClick={() => router.replace("/")}
      >
        Home page
      </button>
    </section>
  );
}

export default NotFound;

"use client";
import MeetingtypeList from "@/components/MeetingtypeList";
import { useGetCalls } from "@/hooks/useGetCalls";

export default function Home() {
  const { upcomingCalls } = useGetCalls();

  const calls = upcomingCalls;
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 max-lg:p-11 lg:p-11">
          {calls && calls.length > 0 ? (
            <h2 className="glassmorphism mx-w-[270px] rounded py-2 text-center text-base font-normal">
              Upcoming Meeting at{" "}
              {calls[calls.length - 1]?.state?.startsAt?.toLocaleTimeString(
                "en-US",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }
              )}
            </h2>
          ) : null}

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingtypeList />
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { hours, minutes, seconds } = prev;
        if (hours === 0 && minutes === 0 && seconds === 0) return prev;

        let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-1 md:gap-1.5 ml-2">
      <Unit val={format(timeLeft.hours)} />
      <span className="text-red-600 font-bold animate-pulse text-[10px]">
        :
      </span>
      <Unit val={format(timeLeft.minutes)} />
      <span className="text-red-600 font-bold animate-pulse text-[10px]">
        :
      </span>
      <Unit val={format(timeLeft.seconds)} />
    </div>
  );
}

const Unit = ({ val }: { val: string }) => (
  <div className="bg-red-600 text-white text-[11px] font-black px-1.5 py-0.5 rounded-md shadow-sm shadow-red-600/20 min-w-[22px] text-center tabular-nums">
    {val}
  </div>
);

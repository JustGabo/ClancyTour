"use client";
import React, { useState } from "react";

const CounterClock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const dateToBe = new Date("May 23, 2024 12:59:59").getTime();
  //   const dateToBe = new Date("May 1, 2024 12:21:00").getTime()

  const conwtdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = dateToBe - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    if (distance < 0) {
      setIsOver(true);
    }
  }, 1000);

  return (
    <section className="flex items-center gap-5 text-[#FFD801]">
      <div className="flex flex-col items-center ">
        <p className="font-semibold text-lg">
          {days < 10 && 0}
          {days}
        </p>
        <p className="font-extralight text-sm">Days</p>
      </div>
      <div className="w-[0.5px] h-6 bg-[#FFD801]" />
      <div className="flex flex-col items-center ">
        <p className="font-semibold text-lg">
          {hours < 10 && 0}
          {hours}
        </p>
        <p className="font-extralight text-sm">Hours</p>
      </div>
      <div className="w-[0.5px] h-6 bg-[#FFD801]" />

      <div className="flex flex-col items-center ">
        <p className="font-semibold text-lg">
          {" "}
          {minutes < 10 && 0}
          {minutes}
        </p>
        <p className="font-extralight text-sm">Minutes</p>
      </div>
      <div className="w-[0.5px] h-6 bg-[#FFD801]" />

      <div className="flex flex-col items-center ">
        <p className="font-semibold text-lg">
          {seconds < 10 && 0}
          {seconds}
        </p>
        <p className="font-extralight text-sm">Seconds</p>
      </div>
    </section>
  );
};

export default CounterClock;

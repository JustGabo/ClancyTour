import Image from "next/image";
import React from "react";
import CounterClock from "./CounterClock";

const Counter = () => {
  return (
    <main className="bg-[#E03D2E] h-[100dvh] px-16 py-10 flex items-center justify-center">
      <section className="flex gap-5">
        <article>
          <Image
            src="/cover-album.png"
            alt="Cover Album"
            width={300}
            height={300}
          />
        </article>
        <article className="flex flex-col gap-10">
          <div>
            <h3 className="uppercase font-extralight text-lg text-[#FFD801]">
              The new album <span className="font-bold">Clancy</span>{" "}
              <span className="text-xs ">may 24</span>
            </h3>
            <h1 className="uppercase text-5xl font-semibold text-[#FFD801]">
              Twenty one pilots
            </h1>
          </div>

          <CounterClock />

          <div className="flex items-center gap-3 place-items-end">
            <button className="text-[#FFD801] text-lg font-semibold">Pre-Save</button>
            <button className="bg-[#FFD801] text-[#E03D2E] p-[6px] font-semibold text-lg">
              Pre-add
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Counter;

import Image from "next/image";
import React from "react";

const Song = () => {
  return (
    <main className="h-[100dvh] bg-[#FFD801] flex items-center justify-center">
      <section className="flex flex-col items-center gap-8">
        <article className="flex flex-col">
          <p className="font-extralight uppercase text-lg text-[#E03D2E] text-end">
            twenty one pilots
          </p>
          <h1 className="uppercase text-8xl text-[#E03D2E] font-semibold  leading-[60px]">
            BackSlide
          </h1>
        </article>
        <article className="flex flex-col items-center gap-2">
          <h3 className="uppercase text-[#E03D2E] text-xl">Listen now</h3>
          <div className="flex items-center gap-5">
            <Image
              src="/icons/youtube.png"
              alt="Listen Icon"
              width={20}
              height={20}
            />
            <Image
              src="/icons/apple.png"
              alt="Listen Icon"
              width={20}
              height={20}
            />
            <Image
              src="/icons/spotify.png"
              alt="Listen Icon"
              width={20}
              height={20}
            />
            <Image
              src="/icons/music.png"
              alt="Listen Icon"
              width={20}
              height={20}
            />
            <Image
              src="/icons/amazon.png"
              alt="Listen Icon"
              width={20}
              height={20}
            />
            <Image
              src="/icons/iconMusic.png"
              alt="Listen Icon"
              width={20}
              height={20}
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Song;

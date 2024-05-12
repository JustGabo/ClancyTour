import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="bg-[#E03D2E] h-[100dvh] px-16 py-10 flex ">
      <section className="flex flex-col justify-between">
        <h2 className="uppercase text-sm font-semibold text-[hsl(51,100%,50%)]">
          Twenty one Pilots
        </h2>
        <article className="flex flex-col gap-2">
          <h3 className="uppercase font-semibold text-[#FFD801]">
            Next concerts
          </h3>
          <div className="text-[#FFD801] flex items-center gap-3">
            <p className="text-xs font-light">
              AUG 15, 2024 BALL ARENA 
              <span className="font-semibold"> DENVER, CO</span>
            </p>
            <div className="w-[1px] h-5 bg-[#FFD801]" />
            <p className="text-xs font-light">
              AUG 16, 2024 BALL ARENA
              <span className="font-semibold"> DENVER, CO</span>
            </p>
          </div>
        </article>
      </section>
      <section className=" items-end flex flex-col relative justify-between">
        <h1 className="text-[10em]  text-end ml-auto font-thin text-[#FFD801] uppercase leading-[120px]">
          The <span className="font-black">Clancy</span> World Tour
        </h1>
        {/* <Image className="object-contain absolute top-36 right-10" src='/heroImg.png' alt='Hero Image' width={600} height={600}/> */}
        <Image
          className="object-cover absolute top-36 right-10"
          src="/heroImg.png"
          alt="Hero Image"
          width={500}
          height={500}
        />
        <button className="uppercase text-[#FFD801]  font-semibold">
          Get Tickets
        </button>
      </section>
    </main>
  );
};

export default Hero;

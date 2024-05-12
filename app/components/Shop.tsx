import Image from "next/image";
import React from "react";

const Shop = () => {
  return (
    <main className="bg-[#FFD801] h-[100dvh] flex-col justify-between  px-16 pt-10 flex">
      <section className="flex justify-between w-full">
        <article className="text-[#E03D2E] w-[60%] pt-5">
          <h1 className="uppercase font-bold text-5xl tracking-tighter  leading-7">
            Twenty one pilots
          </h1>
          <h3 className="uppercase text-lg font-light ml-1">
            Shop all <strong className="font-bold">Vinyl</strong>
          </h3>
        </article>

        <article className="flex p-0  w-full ">
          <div>
            <Image
              className="object-cover"
              src="/shop/BlackVinilMerch.png"
              alt="Vinil"
              width={250}
              height={250}
            />
            <button className="uppercase text-sm font-medium bg-[#E03D2E] w-[140px] h-[40px] ml-4">
              Pre-order now
            </button>
          </div>
          <div>
            <Image
              className="object-cover"
              src="/shop/grayVinilMerch.png"
              alt="Vinil"
              width={250}
              height={250}
            />
            <button className="uppercase text-sm font-medium bg-[#E03D2E] w-[140px] h-[40px] ml-4">
              Pre-order now
            </button>
          </div>
        </article>
      </section>
      <section className="flex flex-col justify-between  w-full ">
        <article className="text-[#E03D2E] w-[60%] pt-5">
          <h1 className="uppercase font-bold text-5xl tracking-tighter  leading-7">
            Twenty one pilots
          </h1>
          <h3 className="uppercase text-lg font-light ml-1">
            More <strong className="font-bold">exclusive merch</strong>
          </h3>
        </article>

        <article className="flex p-0 gap-5 items-center w-full ">
          <Image
            className="object-cover"
            src="/shop/topTapeMerch.png"
            alt="Vinil"
            width={150}
            height={150}
          />
          <Image
            className="object-cover"
            src="/shop/topVinilMerch.png"
            alt="Vinil"
            width={200}
            height={200}
          />
          <Image
            className="object-cover"
            src="/shop/PosterMerch.png"
            alt="Vinil"
            width={200}
            height={200}
          />

          <Image
            className="object-cover"
            src="/shop/topCDMerch.png"
            alt="Vinil"
            width={200}
            height={200}
          />
        </article>
      </section>
    </main>
  );
};

export default Shop;

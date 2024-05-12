import React from "react";

const Footer = () => {
  return (
    <footer className="h-[100dvh] bg-[#E03D2E] text-[#FFD801]  px-16 pt-10 pb-3 flex">
      <main className="flex flex-col w-full justify-between">
        <div className="h-[20%] w-full" />
        <section className="flex-1 flex justify-between gap-10">
          <div className=" flex flex-col gap-10">
            <article className="flex items-center gap-7">
              <input
                type="text"
                placeholder="Email Adress"
                className="placeholder:uppercase w-[250px] outline-none py-3 placeholder:text-sm text-sm placeholder:text-[#FFD801] bg-transparent border-b border-[#FFD801]"
              />
              <div className="flex items-center gap-3">
                <h2 className="uppercase font-semibold">Join</h2>
                <button className="bg-[#FFD801] text-[#E03D2E] font-light w-[50px] h-[25px] text-sm">
                  Terms
                </button>
              </div>
            </article>
            <article className="flex gap-20">
              <ul className="uppercase font-extralight flex flex-col gap-3">
                <li>Youtube</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Tiktok</li>
              </ul>
              <ul className="uppercase font-extralight flex flex-col gap-3">
                <li>Spotify</li>
                <li>Apple music</li>
                <li>Amazon music</li>
              </ul>
            </article>
          </div>
          <article className=" w-[50%] ">
            <h1 className="text-7xl uppercase font-semibold tracking-tighter ">
              Twenty one pilots
            </h1>
            <h3 className="uppercase text-xl font-extralight ml-2">
              The <strong className="font-semibold">Clancy</strong> world tour
            </h3>
          </article>
        </section>
        <section className="flex items-center flex-col tracking-wide font-extralight w-full text-sm justify-center">
          <p>© COPYRIGHT 2024 FBR AND TØP</p>
          <p>
            TERMS OF USE | PRIVACY POLICY | COOKIES POLICY | COOKIES SETTINGS
          </p>
        </section>
      </main>
    </footer>
  );
};

export default Footer;

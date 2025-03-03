import React from "react";

function Header() {
  return (
    <>
      <header className=" flex flex-col items-center text-white  gap-5 header-font text-center">
        <h1 className="font-bold text-[50px]">
          Live Crypto Currency Price Tracker
        </h1>
        <div className="flex gap-2">
          <p>By</p>
          <a
            href="https://github.com/MERNMagician"
            className="underline underline-offset-8 opacity-70"
          >
            Mern Magician
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;

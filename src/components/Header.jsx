import React from "react";

function Header() {
  return (
    <>
      <header className=" flex flex-col items-center text-white  gap-3 header-font text-center">
        <h1 className="font-bold text-[50px]">
          Live Crypto Currency Price Tracker
        </h1>
        <p className="opacity-70">
          By{" "}
          <span className="underline underline-offset-8 ">Mern Magician</span>
        </p>
      </header>
    </>
  );
}

export default Header;

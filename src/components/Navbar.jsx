import React from "react";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between w-[100vw] bg-black p-5 items-center font-[Poppins]">
      <section className="flex items-center gap-[50px]">
        <section className="flex items-center gap-[13px]">
          <img
            src="src/assets/images/bitcoin.png"
            alt=""
            className="h-[80px]"
          />
          <h1 className="text-[30px]">Crypto Tracker</h1>
        </section>
      </section>
      <nav className="flex gap-[30px] mr-6 font-[Fira_Code]">
        <a
          href="https://github.com/MERNMagician"
          className="text-[16px] hover:underline underline-offset-10"
        >
          Check out my projects here
        </a>
        <a
          href="https://www.facebook.com/windyl.monton.3"
          className="text-[16px] hover:underline underline-offset-10"
        >
          Facebook Account
        </a>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";

function Searchbar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Crypto"
        className="placeholder:text-white h-14 bg-linear-to-r from-cyan-500 to-blue-500 w-[450px] p-8 rounded-lg header-font placeholder:opacity-70 text-white outline-0 border-0 text-[20px]"
      />
    </div>
  );
}

export default Searchbar;

import { useEffect, useState, useMemo, useRef } from "react";

function Searchbar({ onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Crypto"
        className="placeholder:text-white h-14 bg-black border-2 border-white w-[70vw] p-8 rounded-lg font-[Jetbrains_Mono] placeholder:opacity-70 text-white 0 text-[15px]"
        id="search"
        onChange={onChange}
      />
    </div>
  );
}

export default Searchbar;

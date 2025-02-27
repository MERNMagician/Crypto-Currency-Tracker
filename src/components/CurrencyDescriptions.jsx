import React from "react";

function CurrencyDescriptions() {
  return (
    <div className="flex mt-4 justify-between  items-center bg-black/60 p-8 rounded w-[90vw]">
      <h1>Name</h1>
      <h1>Symbol</h1>
      <h1>Price</h1>
      <h1>24h Change</h1>
      <h1>24h Volume</h1>
      <h1>Market Cap</h1>
    </div>
  );
}

export default CurrencyDescriptions;

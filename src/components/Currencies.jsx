import React from "react";

function Currencies({
  currencyimage,
  currencyname,
  symbol,
  currentPrice,
  change,
  volume,
  supply,
}) {
  return (
    <div className="flex mt-4 justify-between  items-center bg-black/60 p-8 rounded w-[90vw]">
      <span className="flex items-center gap-[10px] coin">
        <img src={currencyimage} alt="coin-image" />
        <h2>{currencyname}</h2>
      </span>

      <h2>{symbol}</h2>
      <h2>${currentPrice}</h2>
      <h2>${change}</h2>
      <h2>${volume}</h2>
      <h2>{supply}</h2>
    </div>
  );
}

export default Currencies;

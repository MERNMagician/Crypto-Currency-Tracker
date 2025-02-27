import React from "react";

function CurrencyDescriptions() {
  return (
    <thead className="border-2 border-black border-l-0 border-r-0 border-t-0">
      <tr>
        <th className="p-3  ">Name</th>
        <th className="p-3 ">Symbol</th>
        <th className="p-3 ">Price</th>
        <th className="p-3 ">24h Change</th>
        <th className="p-3 ">24h Volume</th>
        <th className="p-3 ">Market Cap</th>
      </tr>
    </thead>
  );
}

export default CurrencyDescriptions;

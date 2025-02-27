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
    <tbody className="">
      <tr>
        <td className=" p-8 coin flex items-center gap-[20px] border-2 border-black border-l-0 border-r-0 border-t-0 ">
          <img src={currencyimage} alt="" />
          {currencyname}
        </td>
        <td className="p-8 border-2 border-black border-l-0 border-r-0 border-t-0">
          {symbol}
        </td>
        <td className=" p-8 border-2 border-black border-l-0 border-r-0 border-t-0">
          ${currentPrice}
        </td>
        <td className=" p-8 border-2 border-black border-l-0 border-r-0 border-t-0">
          ${change}
        </td>
        <td className=" p-8 border-2 border-black border-l-0 border-r-0 border-t-0">
          ${volume}
        </td>
        <td className=" p- border-2 border-black border-l-0 border-r-0 border-t-0">
          ${supply}
        </td>
      </tr>
    </tbody>
  );
}

export default Currencies;

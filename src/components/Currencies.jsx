import React from "react";

function Currencies({ image, name, symbol, price, change, marketCap }) {
  return (
    <tbody>
      <tr className="text-center bg-gray-800 border-2 border-white border-t-0 border-l-0 border-r-0 hover:bg-black cursor-pointer">
        <td className="coin ">
          <div className=" p-5 flex gap-[10px]  flex-col items-center">
            <img src={image} alt="" className="" />
            <div className=" flex  flex-col text-center ">
              <p>{symbol}</p>
              <p className="text-[13px] opacity-60">{name}</p>
            </div>
          </div>
        </td>
        <td>
          <p>${price}</p>
        </td>
        <td>
          {String(change).includes("-") ? (
            <p className="text-red-700">{change}%</p>
          ) : (
            <p className="text-green-400">+{change}%</p>
          )}
        </td>
        <td>
          <p>${marketCap}</p>
        </td>
      </tr>
    </tbody>
  );
}
export default Currencies;

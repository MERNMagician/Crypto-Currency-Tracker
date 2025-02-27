import React from "react";
import Header from "../components/Header";
import Searchbar from "./Searchbar";
import CurrencyDescription from "./CurrencyDescriptions";
import "../assets/css/custom-fonts.css";
import Currencies from "./Currencies";
import { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import "../assets/css/coinsize.css";
function App() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
      )
      .then((response) => {
        setCurrencies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  currencies.map((currency) => {
    console.log(currency);
  });

  return (
    <div className="flex items-center justify-center flex-col mt-10 gap-10 ">
      <Header />

      <div className="text-white flex   flex-col header-font">
        <CurrencyDescription />
        {currencies.map((currency) => (
          <Currencies
            currencyimage={currency.image}
            currencyname={currency.name}
            symbol={currency.symbol}
            currentPrice={currency.current_price}
            change={currency.ath_change_percentage}
            volume={currency.total_volume}
            supply={currency.total_supply}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

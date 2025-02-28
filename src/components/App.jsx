import React from "react";
import Header from "../components/Header";
import Searchbar from "./Searchbar";
import CurrencyDescription from "./CurrencyDescriptions";

import Currencies from "./Currencies";
import { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import "../assets/css/coinsize.css";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [currencyCopies, setCurrencyCopy] = useState([]);
  const [currency, findCurrency] = useState("");

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

  useEffect(() => {
    if (currencyCopies) {
      setCurrencyCopy("");
    }
    setCurrencyCopy([...currencies]);
  }, [currencies]);

  useEffect(() => {
    if (currencyCopies) {
      console.log(currencyCopies);
    }
  }, [currencyCopies]);

  useEffect(() => {
    let filtered = [];
    if (currency) {
      filtered = currencyCopies.filter((data) => {
        data.name.includes(currency);
      });
    }
    console.log(filtered);
  }, [currency]);

  const handleChange = (event) => {
    findCurrency(event.target.value);
  };

  return (
    <div className="flex items-center justify-center flex-col mt-10 gap-10 ">
      <Header />

      {/*
       This component has an event and it is possible because of the passing of event by prop
      */}
      <Searchbar onChange={handleChange} />

      <table className="text-white font-[Hack] w-[90vw] text-center  table-fixed ">
        <CurrencyDescription />

        {/* The toFixed() used to get the double format of the number from the coin gecko api  */}
        {currencies.map((currency) => (
          <Currencies
            image={currency.image}
            name={currency.name}
            symbol={currency.symbol.toUpperCase()}
            price={currency.current_price.toFixed(2)}
            change={currency.market_cap_change_percentage_24h}
            marketCap={currency.market_cap}
          />
        ))}
      </table>
    </div>
  );
}

export default App;

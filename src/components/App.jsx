import React from "react";
import Header from "../components/Header";
import Searchbar from "./Searchbar";
import CurrencyDescription from "./CurrencyDescriptions";
import Currencies from "./Currencies";
import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/coinsize.css";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

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
        setCurrencyCopy(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    Swal.fire({
      title: "Welcome",
      text: "You can use the website to search and look for your currency",
      icon: "info",
    });
  }, []);

  useEffect(() => {
    if (currency) {
      const filteredCurrencies = currencyCopies.filter(findDesiredCurrency);
      setCurrencies(filteredCurrencies);
    }
  }, [currency]);

  const handleChange = (event) => {
    if (event) {
      findCurrency(event.target.value);
    }
  };

  useEffect(() => {
    if (currencies) {
      const sort = currencies.sort((a, b) => {
        return b.current_price - a.current_price;
      });

      setCurrencies(sort);
    }
  }, [currencies]);

  const findDesiredCurrency = (item) => {
    if (item) {
      if (item.name.toLowerCase().includes(currency.toLowerCase())) {
        return item;
      }
    }
  };

  return (
    <div className="flex items-center justify-center flex-col  gap-10 ">
      <Navbar />
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

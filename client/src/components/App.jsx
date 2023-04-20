import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from './Graph';
import Navbar from './Navbar';
import GainsAndResult from './GainsAndResult';
import DateAndBudget from './DateAndBudget';
import StockCards from './StockCards';
import MoneyDance from './MoneyDance';
import SampleData from '../sampleData';

function App() {
  const [ticker1, setTicker1] = useState(SampleData[0]);
  const [ticker2, setTicker2] = useState(SampleData[1]);
  // const [ticker1, setTicker1] = useState({
  //   ticker: 'ticker1',
  //   name: '',
  //   data: '',
  //   high: 0,
  //   low: Infinity,
  // });
  // const [ticker2, setTicker2] = useState({
  //   ticker: 'ticker2',
  //   name: '',
  //   data: '',
  //   high: 0,
  //   low: Infinity,
  // });
  const [tickerAll, setTickerAll] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [searchDate, setSearchDate] = useState('2023-01-01');
  const [budget, setBudget] = useState(5000);
  const [gains, setGains] = useState({ ticker1: 0, ticker2: 0 });
  const [showMoney, setShowMoney] = useState(0);

  // For the memes
  const showTheMoney = () => {
    if (ticker1.high > 0 && ticker2.high > 0) {
      setShowMoney(showMoney + 1);
      setTimeout(() => {
        setShowMoney(2);
      }, 3000);
    }
  };

  // Get request that filters data based on what state is empty
  const getStockInfo = (stock, startingDate) => {
    axios.get('/stocks', { params: { ticker: stock, date: startingDate } })
      .then((response) => {
        if (!ticker1.data && ticker2.name !== searchQuery) {
          setTicker1({ ...ticker1, name: searchQuery, data: response.data });
        } else if (!ticker2.data && ticker1.name !== searchQuery) {
          setTicker2({ ...ticker2, name: searchQuery, data: response.data });
        }
      })
      .catch((err) => console.error(err));
  };

  // Get request that refreshes data based new date
  const getRefreshStocks = () => {
    axios.get('/stocks', { params: { ticker: ticker1.name, date: searchDate } })
      .then((response) => {
        setTicker1({ ...ticker1, data: response.data });
      }).catch((err) => console.error(err));
    axios.get('/stocks', { params: { ticker: ticker2.name, date: searchDate } })
      .then((response) => {
        setTicker2({ ...ticker2, data: response.data });
      }).catch((err) => console.error(err));
  };

  // Combine ticker1 and ticker2 into tickerAll
  useEffect(() => {
    if (ticker1.data && ticker2.data) {
      const tickerAllCombined = ticker1.data.map((t1Day) => ({
        ...ticker2.data.find((t2Day) => (t1Day.date === t2Day.date) && t2Day),
        ...t1Day,
      }));
      setTickerAll(tickerAllCombined);
    }
  }, [ticker1, ticker2]);

  // Refetch stocks when new date is selected
  useEffect(() => {
    getRefreshStocks();
  }, [searchDate]);

  // Give numbers commas
  const numberCommas = (num) => (
    `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
  );

  useEffect(() => {
    if (ticker1.data && ticker2.data) {
      setTimeout(() => {
        showTheMoney();
      }, 5000);
    }
  }, [tickerAll]);

  console.log('showMoney: ', showMoney);
  return (
    <div>
      <Navbar
        getStockInfo={getStockInfo}
        searchQuery={searchQuery}
        searchDate={searchDate}
        setSearchQuery={setSearchQuery}
        budget={budget}
        setBudget={setBudget}
        numberCommas={numberCommas}
      />
      <div className="column-1-3-1">
        <DateAndBudget
          searchDate={searchDate}
          setSearchDate={setSearchDate}
          budget={budget}
          setBudget={setBudget}
        />
        <MoneyDance
          ticker1={ticker1}
          ticker2={ticker2}
          showMoney={showMoney}
        />
        <GainsAndResult
          budget={budget}
          ticker1={ticker1}
          ticker2={ticker2}
          setTicker1={setTicker1}
          setTicker2={setTicker2}
          setTickerAll={setTickerAll}
          searchDate={searchDate}
          gains={gains}
          setGains={setGains}
          numberCommas={numberCommas}
        />
        {/* <button onClick={() =>
          {console.log("ticker1Data: ", ticker1,
          "ticker2Data: ", ticker2,
          "budget: ", budget,
          "tickerAll: ", tickerAll)}}>Test the data</button> */}
        <Graph ticker1={ticker1} ticker2={ticker2} tickerAll={tickerAll} />
        <div className="stock-card-spacer">
          <StockCards
            ticker1={ticker1}
            ticker2={ticker2}
            setTicker1={setTicker1}
            setTicker2={setTicker2}
          />
        </div>
      </div>
      <div className="bottom-5" />
    </div>
  );
}

export default App;

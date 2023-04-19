import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from './Graph';
import Search from './Search';
import BudgetAndResult from './BudgetAndResult';
import sampleData from '../sampleData';

function App() {
  // const [ticker1, setTicker1] = useState(sampleData[1]);
  // const [ticker2, setTicker2] = useState(sampleData[0]);
  const [ticker1, setTicker1] = useState({ name: '', data: '', high: '', low: '' });
  const [ticker2, setTicker2] = useState({ name: '', data: '', high: '', low: '' });
  const [tickerAll, setTickerAll] = useState({});
  const [searchQuery, setSearchQuery] = useState({ ticker: '', date: '' });
  const [budget, setBudget] = useState(10000);
  const [gains, setGains] = useState({ ticker1: 0, ticker2: 0 });

  // Get request that filters data based on what state is empty
  const getStockInfo = (stock, startingDate) => {
    axios.get('/stocks', { params: { ticker: stock, date: startingDate } })
      .then((response) => {
        if (!tickerAll) {
          setTickerAll({ name: searchQuery.ticker, data: response.data });
        }
        if (!ticker1.data && ticker2.name !== searchQuery.ticker) {
          setTicker1({ name: searchQuery.ticker, data: response.data });
        } else if (!ticker2.data && ticker1.name !== searchQuery.ticker) {
          setTicker2({ name: searchQuery.ticker, data: response.data });
        }
      })
      .catch((err) => console.error(err));
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

  // Give numbers commas
  const numberCommas = (num) => (
    `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
  );

  return (
    <div>
      <Search
        getStockInfo={getStockInfo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        budget={budget}
        setBudget={setBudget}
        numberCommas={numberCommas}
      />
      <BudgetAndResult
        budget={budget}
        ticker1={ticker1}
        ticker2={ticker2}
        setTicker1={setTicker1}
        setTicker2={setTicker2}
        setTickerAll={setTickerAll}
        searchQuery={searchQuery}
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
    </div>
  );
}

export default App;

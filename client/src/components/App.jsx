import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from './Graph';
import Graph2 from './Graph2';
import Search from './Search';
import BudgetAndResult from './BudgetAndResult';
import sampleData from '../sampleData';

function App() {
  const [ticker1, setTicker1] = useState({ name: '', data: '' });
  // const [ticker1, setTicker1] = useState(sampleData[1]);
  // const [ticker2, setTicker2] = useState(sampleData[0]);
  const [ticker2, setTicker2] = useState({ name: '', data: '' });
  const [tickerAll, setTickerAll] = useState({});
  const [searchQuery, setSearchQuery] = useState({ ticker: '', date: '' });
  const [budget, setBudget] = useState('');

  console.log('ticker1: ', ticker1);
  console.log('ticker2: ', ticker2);
  console.log('tickerAll: ', tickerAll);
  // Get request that filters data based on what state is empty
  const getStockInfo = (stock, startingDate) => {
    axios.get('/stocks', { params: { ticker: stock, date: startingDate } })
      .then((response) => {
        if (!tickerAll) {
          setTickerAll({ name: searchQuery.ticker, data: response.data });
        }
        if (!ticker1.data) {
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

  return (
    <div>
      <Search
        getStockInfo={getStockInfo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        budget={budget}
        setBudget={setBudget}
      />
      {/* <BudgetAndResult
        budget={budget}
        ticker1={ticker1}
        ticker2={ticker2}
      /> */}
      <button onClick={() =>
        {console.log("ticker1Data: ", ticker1,
        "ticker2Data: ", ticker2,
        "budget: ", budget,
        "tickerAll: ", tickerAll)}}>Test the data</button>
      <Graph ticker1={ticker1} ticker2={ticker2} tickerAll={tickerAll} />
    </div>
  );
}

export default App;

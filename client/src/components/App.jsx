import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from './Graph';
import Graph2 from './Graph2';
import Search from './Search';
import BudgetAndResult from './BudgetAndResult';
import sampleData from '../sampleData';

function App() {
  // const [ticker1, setTicker1] = useState({ name: '', data: '' });
  const [ticker1, setTicker1] = useState(sampleData);
  const [ticker2, setTicker2] = useState({ name: '', date: '' });
  const [searchQuery, setSearchQuery] = useState({ ticker: '', date: '' });
  const [budget, setBudget] = useState('');

  const getStockInfo = (stock, startingDate) => {
    axios.get('/stocks', { params: { ticker: stock, date: startingDate } })
      .then((response) => {
        if (ticker1.name === '') {
          setTicker1({ name: searchQuery.ticker, data: response.data });
        } else if (ticker2.name === '' && ticker1.name !== searchQuery.ticker) {
          setTicker2({ name: searchQuery.ticker, data: response.data });
        }
      })
      .catch((err) => console.error(err));
  };



  // useEffect(() => {
  //   axios.get('/stocks', { params: { ticker: 'msft', date: '2018-01-01' } })
  //     .then((response) => {
  //       setTicker1Data(response.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

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
      <button onClick={() => {console.log("ticker1Data: ", ticker1, "ticker2Data: ", ticker2, "budget: ", budget)}}>Test the data</button>
      <Graph ticker1={ticker1} ticker2={ticker2} />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
const moment = require('moment');

function BudgetAndResult({ budget, ticker1, ticker2, setTicker1, setTicker2, setTickerAll, searchQuery, gains, setGains }) {
  const resetTicker = (tick) => {
    setTickerAll({});
    if (tick === '1') {
      setTicker1({ name: '', data: '' });
    } else if (tick === '2') {
      setTicker2({ name: '', data: '' });
    }
  };

  // const calculateEarning = () => {
  useEffect(() => {
    // const tickers = [ticker1, ticker2];
    if (ticker1.data) {
      const firstDay = ticker1.data.filter(
        (day) => moment(day.unix).format('YYYY-MM-DD')
        === searchQuery.date,
      );
      // let shares = budget / firstDay[0][ticker1]
    }
  }, [ticker1, ticker2]);

  return (
    <div>
      <div className="ticker-names">
        <div>
          <div>{ticker1.name}:</div>
          <span onClick={() => resetTicker('1')}>X</span>
        </div>
        <div>
          <div>{ticker2.name}:</div>
          <span onClick={() => resetTicker('2')}>X</span>
        </div>
      </div>
      <div>{budget}</div>
    </div>
  );
}

export default BudgetAndResult;


// moment(day.unix).format('MMMM do, YYYY') === searchQuery.date
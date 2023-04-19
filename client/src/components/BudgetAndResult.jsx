import React, { useEffect } from 'react';
const moment = require('moment');

function BudgetAndResult({
  budget,
  ticker1,
  ticker2,
  setTicker1,
  setTicker2,
  setTickerAll,
  searchQuery,
  gains,
  setGains }) {
  const resetTicker = (tick) => {
    setTickerAll({});
    if (tick === '1') {
      setTicker1({ name: '', data: '' });
    } else if (tick === '2') {
      setTicker2({ name: '', data: '' });
    }
  };

  useEffect(() => {
    if (ticker1.data) {
      const t1firstDayPrice = ticker1.data[ticker1.data.length - 1][ticker1.name];
      const t1shares = budget / t1firstDayPrice;
      console.log('t1shares: ', t1shares);
      setGains({ ...gains, ticker1: t1shares });
    }
  }, [ticker1]);

  useEffect(() => {
    if (ticker2.data) {
      const t2firstDayPrice = ticker2.data[ticker2.data.length - 1][ticker2.name];
      const t2shares = budget / t2firstDayPrice;
      console.log('t2shares: ', t2shares);
      setGains({ ...gains, ticker2: t2shares });
    }
  }, [ticker2]);

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
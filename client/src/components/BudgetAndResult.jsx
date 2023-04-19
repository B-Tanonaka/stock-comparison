import React, { useEffect } from 'react';
const moment = require('moment');

function BudgetAndResult({
  budget,
  ticker1,
  ticker2,
  setTicker1,
  setTicker2,
  setTickerAll,
  gains,
  setGains,
}) {
  const resetTicker = (tick) => {
    setTickerAll({});
    if (tick === '1') {
      setTicker1({ name: '', data: '' });
    } else if (tick === '2') {
      setTicker2({ name: '', data: '' });
    }
  };

  // Calculate selected day's shares for ticker1
  useEffect(() => {
    if (ticker1.data) {
      const t1firstDayPrice = ticker1.data[0][ticker1.name];
      const t1TodayPrice = ticker1.data[ticker1.data.length - 1][ticker1.name];
      const t1shares = budget / t1firstDayPrice;
      const t1totalGains = Math.round(((t1shares * t1TodayPrice) - budget) * 100) / 100;
      setGains({ ...gains, ticker1: `$${t1totalGains}` });
    }
  }, [ticker1]);

  console.log('gains: ', gains);

  // Calculate selected day's shares for ticker2
  useEffect(() => {
    if (ticker2.data) {
      const t2firstDayPrice = ticker2.data[0][ticker2.name];
      const t2TodayPrice = ticker2.data[ticker2.data.length - 1][ticker2.name];
      const t2shares = budget / t2firstDayPrice;
      const t2totalGains = Math.round(((t2shares * t2TodayPrice) - budget) * 100) / 100;
      setGains({ ...gains, ticker2: `$${t2totalGains}` });
    }
  }, [ticker2]);

  return (
    <div>
      <div className="ticker-names">
        <div>
          <div>{ticker1.name}: {gains.ticker1}</div>
          <span onClick={() => resetTicker('1')}>X</span>
        </div>
        <div>
          <div>{ticker2.name}: {gains.ticker2}</div>
          <span onClick={() => resetTicker('2')}>X</span>
        </div>
      </div>
      <div>{budget}</div>
    </div>
  );
}

export default BudgetAndResult;


// moment(day.unix).format('MMMM do, YYYY') === searchQuery.date
import React, { useEffect } from 'react';

function BudgetAndResult({
  budget,
  ticker1,
  ticker2,
  setTicker1,
  setTicker2,
  setTickerAll,
  gains,
  setGains,
  numberCommas,
}) {
  const resetTicker = (tick) => {
    setTickerAll({});
    if (tick === '1') {
      setTicker1({
        name: '',
        data: '',
        high: 0,
        low: Infinity,
      });
    } else if (tick === '2') {
      setTicker2({
        name: '',
        data: '',
        high: 0,
        low: Infinity,
      });
    }
  };

  const calculateGains = (stock) => {
    const firstDayPrice = stock.data[0][stock.name];
    const todayPrice = stock.data[stock.data.length - 1][stock.name];
    const shares = budget / firstDayPrice;
    return (Math.round(((shares * todayPrice) - budget) * 100) / 100).toFixed(2);
  };

  // Calculate total gains for ticker1
  useEffect(() => {
    if (ticker1.data) {
      const totalGains = calculateGains(ticker1);
      setGains((gains) => ({ ...gains, ticker1: totalGains }));
    }
    if (ticker2.data) {
      const totalGains = calculateGains(ticker2);
      setGains((gains) => ({ ...gains, ticker2: totalGains }));
    }
  }, [ticker1, ticker2, budget]);

  return (
    <div>
      <div className="ticker-names">
        <div>
          <div>
            {ticker1.data && `${ticker1.name}: ${numberCommas(gains.ticker1)}`}
          </div>
          <span onClick={() => resetTicker('1')}>X</span>
        </div>
        <div>
          <div>
            {ticker2.data && `${ticker2.name}: ${numberCommas(gains.ticker2)}`}
          </div>
          <span onClick={() => resetTicker('2')}>X</span>
        </div>
      </div>
      <div>{numberCommas(budget)}</div>
    </div>
  );
}

export default BudgetAndResult;

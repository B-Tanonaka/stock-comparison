import React, { useEffect } from 'react';

function GainsAndResult({
  budget,
  ticker1,
  ticker2,
  setTicker1,
  setTicker2,
  setTickerAll,
  gains,
  setGains,
  numberCommas,
  searchDate,
}) {
  const resetTicker = (tick) => {
    setTickerAll({});
    if (tick === '1') {
      setTicker1({
        ticker: 'ticker1',
        name: '',
        data: '',
        high: 0,
        low: Infinity,
      });
    } else if (tick === '2') {
      setTicker2({
        ticker: 'ticker2',
        name: '',
        data: '',
        high: 0,
        low: Infinity,
      });
    }
  };

  // Calculate total gains helper function
  const calculateGains = (stock) => {
    const firstDayPrice = stock.data[0][stock.ticker];
    const todayPrice = stock.data[stock.data.length - 1][stock.ticker];
    const shares = budget / firstDayPrice;
    return (Math.round(((shares * todayPrice) - budget) * 100) / 100).toFixed(2);
  };

  // Set total gains
  useEffect(() => {
    if (ticker1.data) {
      const totalGains = calculateGains(ticker1);
      setGains((gains) => ({ ...gains, ticker1: totalGains }));
    }
    if (ticker2.data) {
      const totalGains = calculateGains(ticker2);
      setGains((gains) => ({ ...gains, ticker2: totalGains }));
    }
  }, [ticker1, ticker2, budget, searchDate]);

  // Set color of gains text
  const determineGainsColor = (stock) => {
    if (gains[stock] > 0) {
      return 'stock-info-gains-positive';
    }
    return 'stock-info-gains-negative';
  };

  return (
    <div className="stock-info-umbrella">
      {(!ticker1.data && !ticker2.data)
      && (
      <div className="stock-info-placeholder-container">
        <div className="stock-info-placeholder">Select your stocks</div>
      </div>
      )}
      <div className="stock-info-container">
        <div className="stock-left-bubble">
          {ticker1.data
          && (
          <div className="stock-info-wrapper stock-left">
            <div className="stock-info-name stock-left" onClick={() => resetTicker('1')}>{ticker1.name}</div>
            <div className="stock-info-ticker stock-left" onClick={() => resetTicker('1')}>{`${ticker1.ticker}`}</div>
            <div className={`${determineGainsColor('ticker1')} stock-left`}>{numberCommas(gains.ticker1)}</div>
          </div>
          )}
        </div>
        <div className="stock-right-bubble">
          {ticker2.data
            && (
            <div className="stock-info-wrapper stock-right">
              <div className="stock-info-name stock-right" onClick={() => resetTicker('2')}>{ticker2.name}</div>
              <div className="stock-info-ticker stock-right" onClick={() => resetTicker('2')}>{`${ticker2.ticker}`}</div>
              <div className={`${determineGainsColor('ticker2')} stock-right`}>{numberCommas(gains.ticker2)}</div>
            </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default GainsAndResult;

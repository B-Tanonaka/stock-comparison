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
  }, [ticker1, ticker2, budget, searchDate]);

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
            <div className="stock-info-name stock-left" onClick={() => resetTicker('1')}>PpgFholder</div>
            <div className="stock-info-ticker stock-left">{`${ticker1.name}`}</div>
            <div className="stock-info-gains stock-left">{numberCommas(gains.ticker1)}</div>
          </div>
          )}
        </div>
        <div className="stock-right-bubble">
          {ticker2.data
            && (
            <div className="stock-info-wrapper stock-right">
              <div className="stock-info-name stock-right" onClick={() => resetTicker('2')}>PpgFholdgq</div>
              <div className="stock-info-ticker stock-right">{`${ticker2.name}`}</div>
              <div className="stock-info-gains stock-right">{numberCommas(gains.ticker2)}</div>
            </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default GainsAndResult;

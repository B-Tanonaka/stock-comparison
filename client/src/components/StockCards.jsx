import React, { useEffect } from 'react';

function StockCards({
  ticker1,
  ticker2,
  setTicker1,
  setTicker2,
}) {
  const tickerSet = [ticker1, ticker2];

  const renderCards = (share, i) => (
    share.data && (
    <div className="stock-card" key={i}>
      <div className="stock-card-name">{share.name}</div>
      <span className="stock-card-label stock-high-label">High</span>
      <div className="stock-card-price stock-high-price">{`$${share.high}`}</div>
      <span className="stock-card-label stock-low-label">Low</span>
      <div className="stock-card-price stock-low-price">{`$${share.low}`}</div>
      <div className="stock-card-current-price">{share.data[share.data.length - 1][share.name]}</div>
    </div>
    )
  );

  useEffect(() => {
    if (ticker1.data) {
      ticker1.data.forEach((day) => {
        if (day[ticker1.name] > ticker1.high) {
          setTicker1({ ...ticker1, high: day[ticker1.name] });
        }
        if (day[ticker1.name] < ticker1.low) {
          setTicker1({ ...ticker1, low: day[ticker1.name] });
        }
      });
    }
    if (ticker2.data) {
      ticker2.data.forEach((day) => {
        if (day[ticker2.name] > ticker2.high) {
          setTicker2({ ...ticker2, high: day[ticker2.name] });
        }
        if (day[ticker2.name] < ticker2.low) {
          setTicker2({ ...ticker2, low: day[ticker2.name] });
        }
      });
    }
  }, [ticker1, ticker2]);

  return (
    <div className="stock-card-container">
      {tickerSet.map((stock, i) => renderCards(stock, i))}
    </div>
  );
}

export default StockCards;

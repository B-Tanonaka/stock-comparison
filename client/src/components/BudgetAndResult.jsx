import React, { useState } from 'react';

function BudgetAndResult({ budget, ticker1, ticker2, setTicker1, setTicker2, setTickerAll }) {
  const resetTicker = (tick) => {
    setTickerAll({});

    if (tick === '1') {
      setTicker1({ name: '', data: '' });
    } else if (tick === '2') {
      setTicker2({ name: '', data: '' });
    }
  };

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

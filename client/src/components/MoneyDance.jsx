import React from 'react';
import moneyGIF from '../../dist/assets/money.gif';

function MoneyDance({ showMoney }) {
  return (
    <div className="show-money-guy-container">
      {showMoney === 1 && <img src={moneyGIF} alt="Money dance" className="show-money-guy" />}
    </div>
  );
}

export default MoneyDance;

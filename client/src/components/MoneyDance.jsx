import React from 'react';
import moneyGIF from '../../dist/assets/money.gif';

function MoneyDance({ showMoney }) {
  return (
    <div>
      {showMoney && <img src={moneyGIF} alt="Money dance" />}
    </div>
  );
}

export default MoneyDance;

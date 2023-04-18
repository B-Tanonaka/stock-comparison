import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend} from 'recharts';
const moment = require('moment');

function Graph({ ticker1 }) {
  const [range, setRange] = useState({ low: Infinity, high: 0 });

  const findRange = () => {
    ticker1.forEach((day) => {
      day.price = Math.round(day.price * 100) / 100;
      if (day.price < range.low) {
        setRange({ ...range, low: day.price });
      }
      if (day.price > range.high) {
        setRange({ ...range, high: day.price });
      }
    });
    return [
      Math.round((range.low * .9) / 25) * 25,
      Math.round(range.high / 25) * 25,
    ];
  };

  return (
    <div>
      <LineChart width={1000} height={300} data={ticker1}>
        <XAxis />
        <YAxis dataKey="price" type="number" domain={findRange} />
        {/* <CartesianGrid stroke="#eee" strokeDasharray="3 3" /> */}
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Graph;

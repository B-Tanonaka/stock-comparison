import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const moment = require('moment');

function Graph({ ticker1, ticker2 }) {
  const [range, setRange] = useState({ low: Infinity, high: 0 });

  const findRange = () => {
    ticker1.data.forEach((day) => {
      day[ticker1.name] = Math.round(day[ticker1.name] * 100) / 100;
      if (day[ticker1.name] < range.low) {
        setRange({ ...range, low: day[ticker1.name] });
      }
      if (day[ticker1.name] > range.high) {
        setRange({ ...range, high: day[ticker1.name] });
      }
    });
    return [
      Math.round((range.low * .9) / 25) * 25,
      Math.round(range.high / 25) * 25,
    ];
  };

  return (
    <div>
      {ticker1.name !== '' && (
        <LineChart width={1000} height={300} data={ticker1.data}>
          <XAxis dataKey="date" />
          <YAxis type="number" domain={findRange} />
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey={ticker1.name} stroke="#8884d8" />
          <Line type="monotone" dataKey={ticker2.name} stroke="#8884d8" />
        </LineChart>
      )}
    </div>
  );
}

export default Graph;

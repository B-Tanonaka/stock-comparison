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

function Graph({ ticker1, ticker2, tickerAll }) {
  const [range, setRange] = useState({ low: Infinity, high: 0 });

  const findRange = () => {
    ticker1.data.forEach((day) => {
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

  const determineDataSet = () => {
    return tickerAll.length > 0 ? tickerAll : ticker1.data
  };

  return (
    <div>
      <LineChart width={1000} height={300} data={determineDataSet()}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        {ticker1.data && <Line type="monotone" dataKey={ticker1.name} stroke="#8884d8" />}
        {ticker2.data && <Line type="monotone" dataKey={ticker2.name} stroke="#000" />}
      </LineChart>
    </div>
  );
}

export default Graph;

// type="number" domain={findRange}

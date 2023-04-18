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

function Graph({ ticker1Data }) {
  const [uniqueYearTicks, setUniqueYearTicks] = useState([]);

  useEffect(() => {
    const uniqueYears = Array.from(new Set(ticker1Data.map((d) => new Date(d.name).getUTCFullYear())));
    const unique = uniqueYears.map((year) => new Date(Date.UTC(year, 0, 1)).getTime());
    setUniqueYearTicks(unique);
  }, [ticker1Data]);

  const formatXAxisTick = (tickValue) => {
    const date = new Date(tickValue);
    const formattedValue = date.getUTCFullYear().toString();
    console.log("formattedValue: ", formattedValue);
    return formattedValue;
  };

  return (
    <div>
      <LineChart width={1000} height={400} data={ticker1Data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="price" stroke="#000" dot={false} />
        <XAxis
        dataKey="name"
        tickFormatter={formatXAxisTick}
        ticks={ticker1Data.map((year) => new Date(Date.UTC(year, 0, 1)).getTime())}
        />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default Graph;

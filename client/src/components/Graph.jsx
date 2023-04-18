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
  const formatXAxisTick = (tickValue) => {
    const date = new Date(tickValue);
    const formattedValue = date.getUTCFullYear().toString();
    return formattedValue;
  };

  const handleTickSelector = () => {
    useEffect(() => {
      ticker1.map((year) => new Date(Date.UTC(year, 0, 1)).getTime());
    }, [ticker1]);
  };

  const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  // const formatXAxisDataType = (tickValue) => {

  // };

  return (
    <div>
      <LineChart width={1000} height={400} data={ticker1.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="price" stroke="#000" dot={false} />
        <XAxis
        dataKey="date"
        ticks={formatXAxisTick}
        />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default Graph;

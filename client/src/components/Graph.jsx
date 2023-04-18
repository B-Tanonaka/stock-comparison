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
  return (
    <div>
      <LineChart width={1000} height={300} data={ticker1}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Graph;

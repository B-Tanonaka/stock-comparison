import React from 'react';
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
  const determineDataSet = () => (
    tickerAll.length > 0 ? tickerAll : ticker1.data || ticker2.data
  );

  return (
    <div>
      <LineChart width={1000} height={300} data={determineDataSet()}>
        <XAxis tick={false} dataKey="date" />
        <YAxis type="number" domain={['datamin - 10%', 'auto']} />
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

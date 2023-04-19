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

  const calculateDomain = (data) => {
    if (data < 50) {
      return (Math.ceil((data - (data * (1 / 20))) / 5) * 5);
    }
    if (data >= 50 && data <= 100) {
      return (Math.ceil((data - (data * (1 / 20))) / 10) * 10);
    }
    if (data > 100) {
      return (Math.ceil((data - (data * (1 / 20))) / 25) * 25);
    }
  };

  return (
    <div>
      <LineChart width={1000} height={300} data={determineDataSet()} key={Math.random()}>
        <XAxis tick={false} dataKey="date" />
        <YAxis type="number" domain={[(dataMin) => (calculateDomain(dataMin)), 'auto']} />
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

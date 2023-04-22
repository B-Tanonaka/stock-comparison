import React from 'react';
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Graph({ ticker1, ticker2, tickerAll }) {
  const determineDataSet = () => (
    tickerAll.length > 0 ? tickerAll : ticker1.data || ticker2.data
  );

  // const calculateDomain = (data) => {
  //   if (data < 50) {
  //     return (Math.ceil((data - (data * (1 / 20))) / 5) * 5);
  //   }
  //   if (data >= 50 && data <= 100) {
  //     return (Math.ceil((data - (data * (1 / 20))) / 10) * 10);
  //   }
  //   if (data > 100) {
  //     return (Math.ceil((data - (data * (1 / 20))) / 25) * 25);
  //   }
  // };

  return (
    <div className="graph-container">
      <ResponsiveContainer width="80%" height={350}>
        <LineChart data={determineDataSet()} key={Math.random()}>
          <CartesianGrid stroke="#928f8f" strokeDasharray="3 3" />
          <XAxis tick={false} dataKey="date" stroke="white" />
          {!(ticker1.data || ticker2.data) && <YAxis type="number" domain={[0, 100]} tick={{ fill: '#FCFCFC' }} stroke="#FCFCFC" />}
          {/* {(ticker1.data || ticker2.data) && <YAxis type="number" domain={[('auto'), (dataMax) => (calculateDomain(dataMax))]} />} */}
          {(ticker1.data || ticker2.data) && <YAxis type="number" domain={['dataMin', 'auto']} tick={{ fill: '#FCFCFC' }} stroke="#FCFCFC" />}

          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          {ticker1.data && <Line type="monotone" dataKey={ticker1.ticker} stroke="#8884D8" dot={false} />}
          {ticker2.data && <Line type="monotone" dataKey={ticker2.ticker} stroke="#93DCE6" dot={false} />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;

// type="number" domain={findRange}

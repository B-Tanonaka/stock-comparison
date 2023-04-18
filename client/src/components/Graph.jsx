import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

function Graph({ ticker1 }) {
  return (
    <div>
    <div>from the graphs</div>
    <LineChart width={400} height={400} data={ticker1}>
      <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
      <XAxis dataKey={ticker1.name} />
      <YAxis />
    </LineChart>
    </div>
  );
}

export default Graph;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from './Graph';

function App() {
  const [ticker1, setTicker1] = useState([]);
  const [ticker2, setTicker2] = useState([]);

  const getStockInfo = (ticker, date) => {
    axios.get('/stocks', { params: { ticker, date } })
      .then((response) => {
        if (!ticker1) {
          setTicker1(response.data);
        } else {
          setTicker2(response.data);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios.get('/stocks', { params: { ticker: 'msft', date: '2018-01-01' } })
      .then((response) => {
        setTicker1(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Graph ticker1={ticker1} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from './Graph';

function App() {
  const [ticker1, setTicker1] = useState([]);

  useEffect(() => {
    axios.get('/stocks', { params: { ticker: 'msft', date: '2018-01-01' } })
      .then((data) => { setTicker1(data); })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>TOP DAWG APP PAGE</div>
      <Graph ticker1={ticker1} />
    </div>
  );
}

export default App;

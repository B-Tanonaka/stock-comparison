import { useEffect } from 'react';

function HighLow({
  ticker1,
  ticker2,
  setTicker1,
  setTicker2,
}) {
  useEffect(() => {
    if (ticker1.data) {
      ticker1.data.forEach((day) => {
        if (day[ticker1.name] > ticker1.high) {
          setTicker1({ ...ticker1, high: day[ticker1.name] });
        }
        if (day[ticker1.name] < ticker1.low) {
          setTicker1({ ...ticker1, low: day[ticker1.name] });
        }
      });
    }
    if (ticker2.data) {
      ticker2.data.forEach((day) => {
        if (day[ticker2.name] > ticker2.high) {
          setTicker2({ ...ticker2, high: day[ticker2.name] });
        }
        if (day[ticker2.name] < ticker2.low) {
          setTicker2({ ...ticker2, low: day[ticker2.name] });
        }
      });
    }
  }, [ticker1, ticker2]);
}

export default HighLow;

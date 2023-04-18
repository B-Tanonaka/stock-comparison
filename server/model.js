const yahooFinance = require('yahoo-finance2').default;

module.exports = {
  yahoo: async (query, date) => {
    const queryOptions = { period1: date, interval: '1d' };
    const data = await yahooFinance._chart(query, queryOptions);
    return data.quotes.map((day) => ({ name: day.date, price: day.close }
    ));
  },
};

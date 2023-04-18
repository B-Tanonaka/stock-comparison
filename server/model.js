const yahooFinance = require('yahoo-finance2').default;

module.exports = {
  yahoo: async (query, date) => {
    const queryOptions = { period1: date, interval: '1d' };
    const data = await yahooFinance._chart(query, queryOptions);
    return data.quotes.map((day) => ({ date: day.date, [query.toUpperCase()]: day.close }
    ));
  },
};

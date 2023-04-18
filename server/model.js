const yahooFinance = require('yahoo-finance2').default;

module.exports = {
  yahoo: async (query) => {
    const queryOptions = { period1: '2021-05-08', interval: '1d' };
    const result = await yahooFinance._chart(query, queryOptions);
    return result.quotes;
  },
};

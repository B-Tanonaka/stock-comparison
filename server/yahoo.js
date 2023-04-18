const yahooFinance = require('yahoo-finance2').default;

module.exports = {
  yahoo: async (query) => {
    const queryOptions = { period1: '2021-05-08', interval: '1d' };
    const result = await yahooFinance.historical(query, queryOptions);
    return result;
  },
};

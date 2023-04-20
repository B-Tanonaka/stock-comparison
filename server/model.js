const yahooFinance = require('yahoo-finance2').default;
const moment = require('moment');

yahooFinance.setGlobalConfig({
  queue: {
      concurrency: 2,
      // timeout is still set
  }
});

module.exports = {
  yahooStock: async (query, date) => {
    const queryOptions = { period1: date, interval: '1d' };
    const data = await yahooFinance._chart(query, queryOptions);
    return data.quotes.map((day) => ({
      date: moment(day.date).format('LL'),
      utc: day.date,
      [query.toUpperCase()]: Number((Math.round(day.close * 100) / 100).toFixed(2)),
    }));
  },

  yahooName: async (query) => {
    let name;
    const queryOptions = { fields: ['displayName'] };
    try {
      name = await yahooFinance.quote(query, queryOptions);
    } catch (err) {
      console.log(err);
    }
    return name.displayName;
  },
};

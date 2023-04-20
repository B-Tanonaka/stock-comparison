const { yahooStock, yahooName } = require('./model');

module.exports = {
  getStock: (req, res) => {
    yahooStock(req.query.ticker, req.query.date)
      .then((response) => { res.status(200).send(response); })
      .catch((err) => { res.status(500).send(err); });
  },

  getName: (req, res) => {
    yahooName(req.query.ticker)
      .then((response) => { res.status(200).send(response); })
      .catch((err) => { res.status(500).send(err); });
  },
};

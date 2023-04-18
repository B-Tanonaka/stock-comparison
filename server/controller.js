const { yahoo } = require('./model');

module.exports = {
  getStock: (req, res) => {
    yahoo(req.query.ticker, req.query.date)
      .then((response) => { res.status(200).send(response); })
      .catch((err) => { res.status(500).send(err); });
  },
};

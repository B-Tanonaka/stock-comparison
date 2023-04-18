const { yahoo } = require('./yahoo');

module.exports = {
  getStock: (req, res) => {
    yahoo('AAPL')
      .then((response) => { res.status(200).send(response); console.log(response); })
      .catch((err) => { res.status(500).send(err); });
  },
};

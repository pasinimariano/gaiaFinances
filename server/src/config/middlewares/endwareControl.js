const endwareControl = (server) => {
  server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.log(err);
    res.status(status).send(message);
  });
};

module.exports = endwareControl;

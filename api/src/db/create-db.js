module.exports = () => {
  var pgtools = require("pgtools");

  const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    host: process.env.PGHOST
  };

  pgtools.createdb(config, "resin", function(err, res) {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log(res);
  });
};

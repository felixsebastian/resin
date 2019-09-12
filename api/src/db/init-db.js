const createDb = require("./create-db");
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: "postgres",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

pool.query("SELECT datname FROM pg_catalog.pg_database", (err, res) => {
  console.log(err, res);
  pool.end();
});

const express = require("express");
const morgan = require("morgan");
const knex = require("knex")(
  require("./knexfile")[process.env.NODE_ENV || "development"]
);

const port = 8081;
const app = express();

app.use(morgan("tiny"));

app.listen(port, () => console.log(`Server running on port ${port}`));

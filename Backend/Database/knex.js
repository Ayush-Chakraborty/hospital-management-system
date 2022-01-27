import knex from "knex";

const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "./Database/lmh.sqlite3",
  },
});

export default connectedKnex;

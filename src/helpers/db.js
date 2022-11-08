const {Pool} = require("pg");

const db = new Pool({
  connectionString : "postgresql://postgres:AndreAditya211002.@db.ungquuggeexomajrklzd.supabase.co:5432/postgres?schema=public"
});

module.exports = db;

const {Pool} = require("pg");

const db = new Pool({
  connectionString : "postgresql://postgres:AndreAditya020101.@db.ungquuggeexomajrklzd.supabase.co:5432/postgres?schema=public"
});

module.exports = db;

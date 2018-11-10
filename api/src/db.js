import { Pool } from 'pg';

const pool = new Pool();

export async function query(text, params) {
  const start = Date.now();

  const results = await pool.query(text, params);

  const duration = Date.now() - start;
  console.log('executed query', { text, duration, rows: results.rowCount }); // eslint-disable-line

  return results;
}

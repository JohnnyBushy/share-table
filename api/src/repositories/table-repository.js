import { query } from '../db';

export default {
  async save(table) {
    const result = await query(
      `
      INSERT INTO tables (
        id, name, rows
        ) VALUES (${table.id || 'DEFAULT'}, $1, $2)
        ON CONFLICT (id)
        DO UPDATE SET
        name = $1,
        rows = $2
        RETURNING *
      `,
      [table.title, JSON.stringify(table.rows)]
    );

    table.id = result.rows[0].id;

    return table;
  }
};

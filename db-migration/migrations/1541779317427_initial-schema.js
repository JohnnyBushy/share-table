exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('tables', {
    id: 'id',
    name: { type: 'varchar(255)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    },
    rows: { type: 'JSON' }
  });
};

exports.down = pgm => {};

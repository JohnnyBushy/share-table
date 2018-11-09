import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | tables-service', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('build default table', function(assert) {
    const service = this.owner.lookup('service:tables-service');
    assert.ok(service);

    const table = service.buildDefaultTable();

    assert.equal(table.columns.length, 5, 'Table has 5 columns');
    assert.equal(table.rows.length, 5, 'Table has 5 rows');
    assert.ok(
      table.rows.every(row => row.cells.length === 5),
      'Each row has 5 cells'
    );
  });
});

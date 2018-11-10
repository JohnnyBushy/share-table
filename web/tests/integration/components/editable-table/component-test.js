import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | editable-table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with empty data', async function(assert) {
    this.set('rows', []);

    await render(hbs`
      <EditableTable @rows={{rows}} />
    `);

    assert.ok(this.element.querySelector('table'));
  });

  test('it renders proper number of rows and cells', async function(assert) {
    const row = {
      cells: [{ value: '' }, { value: '-1' }, { value: 'Foo Bar' }]
    };
    this.set('rows', [row]);

    await render(hbs`
      <EditableTable @rows={{rows}} />
    `);

    assert.equal(
      this.element.querySelectorAll('tr').length,
      1,
      `Table has one row`
    );

    assert.equal(
      this.element.querySelectorAll('td').length,
      row.cells.length,
      `Table has ${row.cells.length} cells rendered`
    );

    const cellInputs = this.element.querySelectorAll('td input');

    row.cells.forEach((cell, index) => {
      assert.equal(
        cellInputs[index].value,
        cell.value,
        `Cell ${index} has proper value`
      );
    });
  });
});

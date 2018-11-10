import { module, test } from 'qunit';
import { currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import newTable from 'share-table/tests/pages/new-table';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import asyncForEach from 'ember-async-await-for-each';

module('Acceptance | edit table', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('open tables/new and see empty table', async function(assert) {
    await newTable.visit();

    assert.equal(currentURL(), '/tables/new');
    assert.ok(newTable.tableIsVisible);

    assert.equal(newTable.tableRows.length, 5);

    newTable.tableRows.forEach(row => assert.equal(row.cells.length, 5));
  });

  test('can fill table cells', async function(assert) {
    await newTable.visit();

    await asyncForEach(newTable.tableRows.toArray(), async (row, rowIndex) => {
      await asyncForEach(row.cells.toArray(), async (cell, cellIndex) => {
        const cellValue = `Row ${rowIndex} Cell ${cellIndex}`;
        await cell.input(cellValue);
        assert.equal(
          cell.inputValue,
          cellValue,
          `${cellValue} has proper value`
        );
      });
    });

    await newTable.recipients('inbox@sharetable.com').sendEmail();

    assert.ok(newTable.errorIsHidden, `No errors found`);
  });

  test('error is shown on bad API response', async function(assert) {
    server.post('/tables', { error: 'Bad Request' }, 400);

    await newTable.visit().sendEmail();

    assert.equal(newTable.errorIsHidden, false, `Error is shown`);
  });
});

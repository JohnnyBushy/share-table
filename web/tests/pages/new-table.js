import {
  create,
  fillable,
  clickable,
  visitable,
  collection,
  property,
  count,
  isVisible,
  isHidden
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/tables/new'),

  name: fillable('[data-test-table-name]'),
  recipients: fillable('[data-test-email-recipients]'),

  tableIsVisible: isVisible('[data-test-table]'),

  tableRows: collection('[data-test-table-row]', {
    cellsCount: count('[data-test-table-cell]'),
    cells: collection('[data-test-table-cell]', {
      input: fillable('[data-test-table-cell-input]'),
      inputValue: property('value', 'input')
    })
  }),

  tableAddColumn: clickable('[data-test-table-add-column]'),
  tableAddRow: clickable('[data-test-table-add-row]'),

  sendEmail: clickable('[data-test-email-send]'),

  errorIsHidden: isHidden('[data-test-email-send-error]')
});

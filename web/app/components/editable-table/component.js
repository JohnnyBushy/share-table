import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tablesService: service(),

  classNames: ['editable-table'],

  rows: null,

  addColumn(rows) {
    rows.forEach(row => this.tablesService.addCellsToRow(row, 1));
  },

  addRow(rows) {
    const newRow = this.tablesService.buildRow();

    this.tablesService.addCellsToRow(newRow, rows.firstObject.cells.length);

    rows.addObject(newRow);
  }
});

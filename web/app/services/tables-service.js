import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),

  buildDefaultTable() {
    return this.store.createRecord('table', {
      columns: [...Array(5)].map(() => this.buildColumn()),
      rows: [...Array(5)]
        .map(() => this.buildRow())
        .map(row => this.addCellsToRow(row, 5))
    });
  },

  buildColumn() {
    return this.store.createFragment('table-column');
  },

  buildRow() {
    return this.store.createFragment('table-row');
  },

  addCellsToRow(row, numberOfCells = 0) {
    [...Array(numberOfCells)].forEach(() => row.cells.createFragment({}));
    return row;
  }
});

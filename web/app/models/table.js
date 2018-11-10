import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { fragmentArray } from 'ember-data-model-fragments/attributes';

export default Model.extend({
  title: attr('string'),

  columns: fragmentArray('table-column', { defaultValue: () => [] }),
  rows: fragmentArray('table-row', { defaultValue: () => [] })
});

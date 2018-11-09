import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Model from 'ember-data/model';

export default Model.extend({
  recipients: attr('string'),
  table: belongsTo('table')
});

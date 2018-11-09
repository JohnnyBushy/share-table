import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tables/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tables/new');
    assert.ok(route);
  });
});

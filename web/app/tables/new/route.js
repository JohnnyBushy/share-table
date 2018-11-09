import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  tablesService: service(),

  model() {
    return hash({
      table: this.tablesService.buildDefaultTable()
    });
  }
});

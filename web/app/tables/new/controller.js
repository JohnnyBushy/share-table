import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  table: alias('model.table'),

  recipients: null,

  saveAndSendByEmail: task(function*(table, recipients) {
    try {
      yield timeout(500);
      const savedTable = yield table.save();

      const email = this.store.createRecord('email', {
        recipients,
        table: savedTable
      });

      yield email.save();
    } catch (e) {
      this.set('error', e.message);
    }
  }).drop()
});

import Ember from 'ember';
import CurrentUserMixin from '../../../mixins/current-user';
import { module, test } from 'qunit';

module('Unit | Mixin | current user');

// Replace this with your real tests.
test('it works', function(assert) {
  var CurrentUserObject = Ember.Object.extend(CurrentUserMixin);
  var subject = CurrentUserObject.create();
  assert.ok(subject);
});

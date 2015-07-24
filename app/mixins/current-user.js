import Ember from 'ember';

export default Ember.Mixin.create({
  currentUser: function() {
    return this.get('controllers.current-user');
  }.property('controllers.current-user')
});

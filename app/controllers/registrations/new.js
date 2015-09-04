import Ember from 'ember';

export default Ember.Controller.extend({
  errors: {},
  full_name: '',
  email: '',
  password: '',
  actions: {
    registerUser: function() {
      var that = this,
          data = that.getProperties('full_name', 'email', 'password'),
          user = that.store.createRecord('user', data);

      user.save().then(function() {
        console.log('success');
      }).catch(function(reason) {
        console.log('failed');
      });
    }
  }
});

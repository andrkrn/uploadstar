import Ember from 'ember';

export default Ember.Controller.extend({
  errors: false,
  password: '',

  actions: {

    authenticate: function() {
      var that = this,
          data = that.getProperties('identification', 'password');
      that.get('session').authenticate('simple-auth-authenticator:devise', data).then(function() {
      }, function() {
        that.set('errors', true);
        that.setProperties({
          password: ''
        });
      });
    }
  }
});
